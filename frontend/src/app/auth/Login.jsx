import React , {useRef , useState , useEffect} from 'react'
import '../style.css';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation} from 'react-router-dom'

const LOGIN_URI = '/auth';

export default function Login() {
  const {setAuth} = useAuth();
  

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const [email , setEmail] = useState('');
  const [pwd , setPwd] = useState('');
  const [errMsg , setErrMsg] = useState('');
  const [success , setSuccess] = useState('');

  function navigateToUrl (url) {
    window.location.href = url
  }

  async function auth() {
    const response = await fetch('http://127.0.0.1:5555/request', 
      {method : 'post'}
    )
    const data = await response.json()
    console.log(data)
    navigateToUrl(data.url);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URI, 
        JSON.stringify({email,pwd}),
        {
          headers : { 'Content-Type' : 'application/json'},
          withCredentials : true
        }
      );

      console.log(JSON.stringify(response.data));
      console.log(response.data?.accessToken)
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const userId = response?.data?.result._id;
      console.log(userId)
      setAuth({email , pwd , roles , accessToken , userId})
      setEmail('')
      setPwd('')
      navigate(from , {replace : true})

    }catch(err) {
      if(!err?.response) {
        setErrMsg('No Server response')
      } else if(err.response?.statis === 400) {
        setErrMsg('Missing email or password')
      }
      else if(err.response?.statis === 401) {
        setErrMsg('Unauthorized')
      }
      else {
        setErrMsg('Login Failed')
      }
      console.log('error while Login ' , err)
    }
  }

 
  return (
    <section>
     
        <div className="flex min-h-full  justify-center px-6 py-28 lg:px-8 bg-slate-50">
        <div className='bg-white shadow-xl w-96 p-10'>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
    
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">تسجيل الدخول إلى حسابك</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit}>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        عنوان البريد الإلكتروني
        </label>
        <div className="mt-2">
          <input 
          id="email"
          className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="email"
          type="email"
          autocomplete="email"
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="pwd" className="block text-sm font-medium leading-6 text-gray-900">
          كلمة المرور
          </label>
          
        </div>
        <div className="mt-2">
          <input 
          className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id="pwd" 
          name="pwd" 
          type="password" 
          autocomplete="current-password" 
          required
          value={pwd}
          onChange={(e) => setPwd(e.target.value)} />
        </div>
      </div>

      <div>
        <button type="submit"
         className="flex w-full justify-center rounded-md bg-[#FFAD71] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">تسجيل الدخول</button>
      </div>
    </form>
  </div>
  <button onClick={() => auth()}>login with google</button>
  </div>
</div>
    
      

  </section>
  )
}

import React , {useRef , useState , useEffect} from 'react'
import '../style.css';
import axios from '../api/axios';
import {Navigate} from 'react-router-dom'
import ChooseRole from './ChooseRole';
import useAuth from '../hooks/useAuth';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


export default function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const {setAuth} = useAuth();

  const [email , setEmail] = useState('');
  const [validName, setValidName] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [userId, setUserId] = useState('');

//   useEffect(() => {
//     userRef.current.focus();
// }, [])

useEffect(() => {
  setValidName(EMAIL_REGEX.test(email));
}, [email])

useEffect(() => {
  setValidPwd(PWD_REGEX.test(pwd));
  setValidMatch(pwd === matchPwd);
}, [pwd, matchPwd])

useEffect(() => {
  setErrMsg('');
}, [email, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(REGISTER_URL, 
        JSON.stringify({email, firstName,lastName,pwd}),
        {
          headers : { 'Content-Type' : 'application/json'},
          withCredentials : true
        }
      );
      console.log(response.data);
      setUserId(response.data._id); 
      
      setSuccess(true)
      //clear the input
      setFirstName('')
      setLastName('')
      setEmail('')
      setPwd('')
    }catch(err) {
      console.log(err)
      
    }
  }
  return (
    <section className='pt-10 bg-slate-50'>
      <div className="flex min-h-full  justify-center px-6 py-12 lg:px-8 ">
        <div className='bg-white shadow-xl w-1/2 p-10'>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
    
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">إنشاء حساب </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  {userId ? (
      <ChooseRole userId={userId} />
  ) : (
    <form className="space-y-6" onSubmit={handleSubmit}>
    <div>
        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
        الاسم الشخصي
        </label>
        <div className="mt-2">
          <input 
          id="firstName"
          className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="firstName"
          type="text"
          autocomplete="off"
          required 
          value={firstName}
          onChange={(e) => {setFirstName(e.target.value)}}/>
        </div>
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
        اسم العائلي
        </label>
        <div className="mt-2">
          <input 
          id="lastName"
          className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="lastName"
          type="text"
          autocomplete="off"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>

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
         className="flex w-full justify-center rounded-md bg-[#FFAD71] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#62BDAE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">إنشاء حساب</button>
      </div>
    </form>
  ) }
    
  </div>
  </div>
</div>

  </section>
  )
}

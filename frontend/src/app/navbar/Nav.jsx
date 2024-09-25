import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser , faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav.css';
import useAuth from "../hooks/useAuth"
import useLogout from '../hooks/useLogout';


export default function Nav() {
  const {auth } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();

  const [navBackground, setNavBackground] = useState('bg-slate-50 shadow-none');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const signOut = async () => {
    await logout();
    navigate('/')
  }
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavBackground('bg-white shadow-sm');
    } else {
      setNavBackground('bg-slate-50 shadow-none');
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 lg:h-20 ${navBackground}`}>
      <div className='flex items-center justify-center gap-20'>
        <div className="flex-shrink-0">
          <a href="#" title="" className="flex">
            <img className="w-32" src={process.env.PUBLIC_URL+`/Images/logo.png`} alt="" />
          </a>
        </div>
        <div className='flex justify-between gap-14'>
          <Link to="/"  className="nav-item text-base no-underline text-gray-700 hover:text-teal-500 transition-all duration-200 hover:text-opacity-80">
            الرئيسية
          </Link>
          <div className="relative">
            <button 
              onClick={toggleDropdown} 
              onBlur={closeDropdown} 
              title="Features" 
              className="nav-item text-base text-gray-700 hover:text-teal-500 transition-all duration-200 hover:text-opacity-80 flex items-center"
            >
              التصنيفات
              <svg className="ml-1 w-4 h-4 text-gray-700 hover:text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            {dropdownVisible && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <Link to="/categories/category1" className="block px-4 py-2 no-underline text-gray-700 hover:bg-gray-100">Category 1</Link>
                <Link to="/categories/category2" className="block px-4 py-2 no-underline text-gray-700 hover:bg-gray-100">Category 2</Link>
                <Link to="/categories/category3" className="block px-4 py-2 no-underline text-gray-700 hover:bg-gray-100">Category 3</Link>
              </div>
            )}
          </div>
          {auth && auth.roles && auth.roles.includes(5150) && (
            <Link to="/dashboard"  className="nav-item text-base no-underline text-gray-700 hover:text-teal-500 transition-all duration-200 hover:text-opacity-80">
            Dashboard
          </Link>
          )}
          
          {auth && auth.roles && auth.roles.includes(1984) && (
              <>
                <Link to="/solutions" title="Solutions" className="nav-item no-underline text-base text-gray-700 hover:text-teal-500 transition-all duration-200 hover:text-opacity-80">
                  الطلبات الواردة
                </Link>
                <Link to="/add-service" title="Add Service" className="nav-item no-underline text-base text-gray-700 hover:text-teal-500 transition-all duration-200 hover:text-opacity-80">
                  أضف خدمة
                </Link>
              </>
            )}
        </div>
      </div>
      <div className='px-5'>
      
      <Link to={'/cart'} title="" className="hidden lg:inline-flex no-underline items-center justify-center px-3 py-2.5 text-base transition-all duration-200 hover:text-teal-500 font-semibold text-gray-700 rounded-full" role="button">
          <FontAwesomeIcon icon={faCartShopping} className='text-xl' />
        </Link>
        {auth?.accessToken ? (
          <>
          <Link to={'/signIn'} title="" className="hidden lg:inline-flex no-underline items-center justify-center px-3 py-2.5 text-base transition-all duration-200 hover:text-teal-500 font-semibold text-gray-700 rounded-full" role="button">
          <FontAwesomeIcon icon={faEnvelope} className='text-xl' />
        </Link>
        <Link to={'/profile'} title="" className="hidden lg:inline-flex no-underline items-center justify-center px-3 py-2.5 text-base transition-all duration-200 hover:text-teal-500 font-semibold text-gray-700 rounded-full" role="button">
          <FontAwesomeIcon icon={faCircleUser} className='text-xl' />
        </Link>
        <p 
         className="hidden lg:inline-flex items-center justify-center px-3 py-2.5 text-base transition-all duration-200 hover:text-teal-500 font-semibold text-gray-700 rounded-full" role="button">
          <FontAwesomeIcon icon={faRightFromBracket} className='text-xl' onClick={signOut}/>
        </p>
          </>
        ) : 
        (
          <>
            <Link to={'/signIn'} title="" className="hidden lg:inline-flex no-underline items-center justify-center px-3 py-2.5 text-base transition-all duration-200 hover:text-teal-500 font-semibold text-gray-700 rounded-full" role="button">
          تسجيل الدخول
          </Link>
          <Link to={'/signUp'} title="" className="hidden lg:inline-flex no-underline items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-[#DE9467] hover:text-black focus:text-black  font-semibold text-white bg-[#62BDAE] rounded-full" role="button">
            إنشاء حساب
          </Link>
          </>
        )}
      </div>
    </nav>
  );
}

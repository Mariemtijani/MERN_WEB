import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='flex items-center justify-between h-16 lg:h-20'>
      
    <div className='flex items-center justify-center gap-20'>
        <div class="flex-shrink-0">
            <a href="#" title="" className="flex">
                <img class="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
            </a>
        </div>
        <div>
        <Link to="/Categories" title="Features" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
          Categories
        </Link>
        {/* <Link to="/solutions" title="Solutions" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
          Solutions
        </Link>
        <Link to="/resources" title="Resources" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
          Resources
        </Link>
        <Link to="/pricing" title="Pricing" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
          Pricing
        </Link> */}
        </div>
        </div>

        <div>
            <Link to={'/signIn'} title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:text-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-black  rounded-full" role="button"> Sign In </Link>
            <Link to={'/signUp'} title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button"> Sign Up </Link>
        </div>
   
    </nav>
  );
}

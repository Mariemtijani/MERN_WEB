// components/Header.js
import React from 'react';
import UserMenu from './UserMenu';

export default function Header() {
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-white px-6 ">
      <div className="flex-1">
        <h1 className="font-semibold text-lg text-gray-900">Dashboard</h1>
      </div>
      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <svg
              className="absolute left-12 top-2 h-4 w-4 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              className="pl-8 pr-8 ml-10 sm:w-[300px] md:w-[200px] lg:w-[800px] bg-gray-200 h-8 rounded"
              placeholder="Search..."
              type="search"
            />
          </div>
        </form>
        <UserMenu />
      </div>
    </header>
  );
}

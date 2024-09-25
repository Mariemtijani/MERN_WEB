// components/UserMenu.js
import React, { useState } from 'react';

export default function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
      >
        <img
          alt="Avatar"
          className="rounded-full"
          height="32"
          src="/placeholder.svg"
          style={{ aspectRatio: '32/32', objectFit: 'cover' }}
          width="32"
        />
        <span className="sr-only">Toggle user menu</span>
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 top-6  mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              href="#"
            >
              Settings
            </a>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              href="#"
            >
              Support
            </a>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              href="#"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

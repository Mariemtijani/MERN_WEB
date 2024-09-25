import React from 'react';
import { faHouse, faLayerGroup, faTable, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="hidden border-r lg:block bg-teal-700">
      <div className="flex flex-col gap-2">
        <div className="flex h-[60px] items-center px-6">
          <Link className="flex items-center gap-2 font-semibold text-white " to={'/'}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Artisans</span>
          </Link>
        </div>
        <div className="flex-1 pt-5">
          <nav className="grid items-start px-4 ">
            <Link
              className="flex items-center gap-3 rounded-lg text-white px-3 py-3 text-base hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-black transition-all"
              to={'/'}
            >
              <FontAwesomeIcon icon={faHouse} />
              الرئيسية
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg mt-4 px-3 py-3 text-white text-base transition-all hover:bg-gray-200 hover:text-black focus:bg-gray-200 focus:text-black"
              to={'/users'}
            >
              <FontAwesomeIcon icon={faUsers} />
              المستخدمون
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg mt-4 px-3 py-3 text-white text-base transition-all hover:bg-gray-200 hover:text-black focus:bg-gray-200 focus:text-black"
              to={'/artisans'}
            >
              <FontAwesomeIcon icon={faUsers} />
              الحرفيون
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg mt-4 px-3 py-3 text-white text-base transition-all hover:bg-gray-200 hover:text-black focus:bg-gray-200 focus:text-black"
              to={'/all-services'}
            >
              <FontAwesomeIcon icon={faTable} />
              الخدمات
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg mt-4 px-3 py-3 text-white text-base transition-all hover:bg-gray-200 hover:text-black focus:bg-gray-200 focus:text-black"
              to={'/all-categories'}
            >
              <FontAwesomeIcon icon={faLayerGroup} />
              الفئات
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

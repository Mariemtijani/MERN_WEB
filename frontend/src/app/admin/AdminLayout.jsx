import React from 'react';
import Sidebar from './Sidebar';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import AddCategory from './categories/AddCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import EditCategory from './categories/EditCategory';


export default function AdminLayout() {
   

  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
         <Outlet />
        </main>
        <AddCategory />
        <EditCategory />

      </div>
    </div>
  );
}

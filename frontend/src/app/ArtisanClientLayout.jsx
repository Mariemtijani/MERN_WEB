import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './navbar/Nav';

export default function ArtisanClientLayout() {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/sign-in'>Sign In</Link>
      </nav>
      <br />
      <Outlet />
    </div>
  );
}

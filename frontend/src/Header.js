import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Header() {
  return (
    <header className="flex items-end justify-between pt-5">
      <div id="main-logo">
        <img src={logo} className='block' alt="Logo" />
        <div className="mt-1 block">The Little Helper</div>
      </div>

      <div className="mr-9" id="main-menu">
        <Link className="text-base text-lg text-gray-500 hover:text-gray-900 mr-7" to="/welcome">Home</Link>
        <Link className="text-base text-lg text-gray-500 hover:text-gray-900" to="/lists">My Lists</Link>
      </div>
    </header >
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white text-red-600 shadow-md">
      <img src="src/assets/logo.png" className='w-6 ml-15 rounded-md' alt="" />
      <h1 className="text-xl font-bold ml-2">Hotels.com</h1>
      <ul className="flex ml-auto gap-8 font-semibold text-lg mr-10">
        <li><Link to="/" className="hover:text-red-500">Home</Link></li>
        <li><Link to="/hotels" className="hover:text-red-500">Hotels</Link></li>
        <li><Link to="/aboutus" className="hover:text-red-500">About Us</Link></li>
        <li><Link to="/signup" className="hover:text-red-500">Register</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;

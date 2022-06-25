import React from 'react';
import { Link } from 'react-router-dom';
import imgIcon from '../../../images/cartoon-logo-1.png';

const Navbar = () => {
  const menuItems = <>
    <li><Link to='/home' className='text-white'>Home</Link></li>
    <li><Link to='/about' className='text-white'>About</Link></li>
    <li><Link to='/blog' className='text-white'>Blogs</Link></li>
    {/* <li><Link to='' className='text-white'>Works</Link></li> */}
    <li><Link to='/contact' className='text-white'>Contact</Link></li>
    <li><Link to='/all-projects' className='text-white'>Projects</Link></li>
    <li><Link to='/services' className='text-white'>Services</Link></li>
  </>
    return (
        <div class="navbar bg-primary sticky top-0 z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
      {menuItems}
      </ul>
          </div>
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src={imgIcon} />
        </div>
        </label>
        <Link to='/home' class="btn btn-ghost normal-case text-xl text-white">Abdullah Al Omar</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    {menuItems}
          </ul>
  </div>
  {/* <div class="navbar-end">
    <a class="btn">Get started</a>
  </div> */}
</div>
    );
};

export default Navbar;
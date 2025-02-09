import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle
import useShop from '../ShopContext';

const Header = () => {
  const { products } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='bg-white p-4 shadow opacity-80 fixed top-0 left-0 right-0 z-10'>
      <div className='max-w-4xl mx-auto flex justify-between items-center'>
        <h1 className='text-3xl text-gray-800 font-semibold'>
          <NavLink to="/" className='hover:text-blue-600'>Logo</NavLink>
        </h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-center items-center text-xl text-gray-900 space-x-4'>
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
          }>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
          }>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
          }>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
          }>Contact</NavLink>
          <div className='relative'>
            <NavLink to="/cart" className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }>
              <IoCart size={25} />
            </NavLink>
            <span className='bg-blue-600 text-xs text-white absolute -top-1 -right-1 w-4 h-4 rounded-full flex justify-center items-center'>
              {products.length}
            </span>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-gray-700' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full shadow-md">
          <ul className='flex flex-col text-center text-lg text-gray-900 space-y-4 p-4'>
            <NavLink to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/products" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Products</NavLink>
            <NavLink to="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <NavLink to="/cart" className="hover:text-blue-600 flex justify-center items-center" onClick={() => setMenuOpen(false)}>
              <IoCart size={25} />
              <span className='bg-blue-600 text-xs text-white ml-2 w-5 h-5 rounded-full flex justify-center items-center'>
                {products.length}
              </span>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

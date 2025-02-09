import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCart } from "react-icons/io5";
import useShop from '../ShopContext';

const Header = () => {
  const {products} = useShop();
  return (
    <div className='bg-white  p-4 shadow opacity-80 fixed top-0 left-0 right-0 z-10'>
      <div className='max-w-4xl mx-auto flex justify-between items-center'>
        <h1 className='text-3xl text-gray-800 font-semibold'>
            <NavLink to="/" className='hover:text-blue-600'  >Logo</NavLink>
            </h1>
        <ul className='flex justify-center items-center text-xl text-gray-900 space-x-4 '>
        <NavLink to="/" className={({ isActive }) =>
              isActive
                ? "text-blue-600 "
                : "text-gray-700 hover:text-blue-600"
            }>Home</NavLink>
           <NavLink to="/products"  className={({ isActive }) =>
              isActive
                ? "text-blue-600 "
                : "text-gray-700 hover:text-blue-600"
            }>Products</NavLink>
           <NavLink to="/about" className={({ isActive }) =>
              isActive
                ? "text-blue-600 "
                : "text-gray-700 hover:text-blue-600"
            }>About</NavLink>
           <NavLink to="/contact" className={({ isActive }) =>
              isActive
                ? "text-blue-600 "
                : "text-gray-700 hover:text-blue-600"
            }>Contact</NavLink>
           <div className='relative'>
           <NavLink to="/cart" className={({ isActive }) =>
              isActive
                ? "text-blue-600 "
                : "text-gray-700 hover:text-blue-600"
            }>
           <IoCart size={25} />
           </NavLink>
            <span
            className='bg-blue-600 text-xs text-white absolute -top-1 -right-1 w-4 h-4  rounded-full flex text-center justify-center items-center'
            >
            {products.length}
            </span>
           </div>
           
        </ul>
      </div>
    </div>
  )
}

export default Header

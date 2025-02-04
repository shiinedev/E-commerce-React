import React from 'react'
import { Link } from 'react-router-dom'
import { IoCart } from "react-icons/io5";

const Header = () => {
  return (
    <div className='bg-white  p-4 shadow opacity-80 fixed top-0 left-0 right-0 z-10'>
      <div className='max-w-4xl mx-auto flex justify-between items-center'>
        <h1 className='text-3xl text-gray-800 font-semibold'>
            <Link to="/" className='hover:text-pink-600' >Logo</Link>
            </h1>
        <ul className='flex justify-center items-center text-xl text-gray-900 space-x-4 '>
        <Link to="/" className='hover:text-pink-600'>Home</Link>
           <Link to="/products"  className='hover:text-pink-600'>Products</Link>
           <Link to="/about"  className='hover:text-pink-600'>About</Link>
           <Link to="/contact" className='hover:text-pink-600'>Contact</Link>
           <div className='relative'>
           <Link to="/cart" className='hover:text-pink-600'>
           <IoCart size={25} />
           </Link>
           <span className='bg-pink-600 text-xs text-white absolute -top-1 -right-1 w-4 h-4  rounded-full flex text-center justify-center items-center'>0</span>
           </div>
           
        </ul>
      </div>
    </div>
  )
}

export default Header

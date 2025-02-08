import React from 'react'

const Payments = () => {
  return (
    <div className=' border border-gray-300 p-4 shadow-md rounded-lg  '>
        <h2 className='text-2xl font-semibold mb-4'>Choose payment method </h2>
        <div className='space-y-2'>
            <label className='flex items-center space-x-2'>
                <input type="radio" name='payment' className=' text-pink-600' />
                <span className='text-sm font-semibold'>Card Payment</span>
            </label>
            <label className='flex items-center space-x-2'>
                <input type="radio" name='payment' className=' text-pink-600' />
                <span className='text-sm font-semibold'>Card on delivery</span>
            </label>

        </div>
        <div className='space-y-2 border-t border-gray-200 mt-4'>
            <label className='flex items-center justify-between'>
               <span className='text-lg font-semibold'>SubTotal :</span>
                <span className='text-lg  font-semibold'>$25.20</span>
            </label>
            <label className='flex items-center justify-between'>
               <span className='text-xl text-pink-600 font-bold'>Total :</span>
                <span className='text-xl text-pink-600 text font-bold'>$100.8</span>
            </label>

        </div>
        
      <button className='w-full text-lg font-semibold bg-pink-600 text-white px-5 py-2 hover:bg-pink-700  transition-colors duration-200 ease-in-out cursor-pointer rounded-lg mt-4 '>
        Proceed To Checkout</button>
    </div>
  )
}

export default Payments

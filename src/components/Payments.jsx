import React from 'react'
import useShop from '../ShopContext';
import toast from 'react-hot-toast';

const Payments = () => {
  const {products,total,clearCart} = useShop();
 
  const handleClick = () =>{
    if(products.length > 0){
      toast.success('Successfully proceed!')
      clearCart();
    }else{
      toast.error("No cart items available please add some cart items.");
    }
   
  }
  return (
    <div className=' border border-gray-300 p-4 shadow-md rounded-lg  '>
        <h2 className='text-2xl font-semibold mb-4'>Choose payment method </h2>
        <div className='space-y-2'>
            <label className='flex items-center space-x-2'>
                <input type="radio" name='payment' className=' text-blue-600' />
                <span className='text-sm font-semibold'>Card Payment</span>
            </label>
            <label className='flex items-center space-x-2'>
                <input type="radio" name='payment' className=' text-blue-600' />
                <span className='text-sm font-semibold'>Card on delivery</span>
            </label>

        </div>
        <div className='space-y-2 border-t border-gray-200 mt-4'>
            <label className='flex items-center justify-between'>
               <span className='text-lg font-semibold'>SubTotal :</span>
                <span className='text-lg  font-semibold'>${total}</span>
            </label>
            <label className='flex items-center justify-between'>
               <span className='text-xl text-blue-600 font-bold'>Total :</span>
                <span className='text-xl text-blue-600 text font-bold'>${total}</span>
            </label>

        </div>
        
      <button
      onClick={handleClick}
       className='w-full text-lg font-semibold bg-blue-600 text-white px-5 py-2 hover:bg-blue-700  transition-colors duration-200 ease-in-out cursor-pointer rounded-lg mt-4 '>
        Proceed To Checkout</button>
    </div>
  )
}

export default Payments

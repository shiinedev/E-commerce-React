import React  from 'react'
import { GoTrash } from 'react-icons/go';
import Payments from './Payments';
import useShop from '../ShopContext';

const CartItems = () => {
    
    const {products,updateQuantity,removeItemFromCart} = useShop();


  return (
    <div className='p-4 flex flex-col space-y-6  lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6'>
       
        <div className='flex-1 '>
             <h2  className='text-xl font-semibold mb-4'>
            {products.length > 0 ? "Your Cart Items" : "No cart items available please add some cart items. "}
        </h2>
            {
                products.map(product =>(
                    <div key={product.id} className=' flex items-start space-x-2 space-y-4'>
                        <img
                        className='h-34 w-34 rounded-lg  shadow object-cover'
                         src={product.thumbnail} 
                         alt={product.title}
                         />
                        <div className='w-full flex flex-col items-start '>
                            <h3 className='text-lg font-semibold'>{product.title}</h3>
                            <p className='text-sm text-gray-600'>{product.description}</p>
                            <div className='w-full flex items-center  justify-between'>
                                <div className='space-x-2 flex items-center '>
                                    <span className='text-lg text-blue-600 font-semibold '>${product.price}</span>
                                    <label className='space-x-2'>
                                        <span className='text-lg font-semibold '>Quantity</span>
                                        <input 
                                        defaultValue={product.quantity}
                                        onChange={(e) => updateQuantity(product,e.target.value)}
                                        className='w-10 h-8  border text-center border-gray-300 rounded' type="number" />
                                    </label>
                                </div>
                                <button
                                onClick={() => removeItemFromCart(product)}
                                 className='text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer '>
                                   <GoTrash />
                                </button>
                            </div>

                        </div>
                    </div>

                ))
            } 

        </div>
        <div>
            <Payments />
        </div>
    </div>
  )
}

export default CartItems

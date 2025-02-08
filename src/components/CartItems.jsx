import React, { useContext } from 'react'
import { GoTrash } from 'react-icons/go';
import Payments from './Payments';
import { ShopContext } from '../ShopContext';

const CartItems = () => {
    // const products = [
    //     {
    //         "id": 1,
    //         "title": "Product-1",
    //         "description": "This is a brief description of Product-1.",
    //         "price": 93.07,
    //         "stock": 0,
    //         "thumbnail": "https://fakeimg.pl/250x250/?text=Product-1&font=lobster",
    //         "category": "Books",
    //         "rating": 2.7
    //     },
    //     {
    //         "id": 2,
    //         "title": "Product-2",
    //         "description": "This is a brief description of Product-2.",
    //         "price": 44.45,
    //         "stock": 28,
    //         "thumbnail": "https://fakeimg.pl/250x250/?text=Product-2&font=lobster",
    //         "category": "Books",
    //         "rating": 2.2
    //     },
    //     {
    //         "id": 3,
    //         "title": "Product-3",
    //         "description": "This is a brief description of Product-3.",
    //         "price": 37.81,
    //         "stock": 68,
    //         "thumbnail": "https://fakeimg.pl/250x250/?text=Product-3&font=lobster",
    //         "category": "Home Decor",
    //         "rating": 4.1
    //     },
        
    // ];

    const {products,total,updateQuantity,removeItemFromCart,clearCart} = useContext(ShopContext);
  return (
    <div className='p-4 flex flex-col space-y-6  lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6'>
       
        <div className='flex-1 '>
             <h2  className='text-xl font-semibold mb-4'>
            {products.length > 0 ? "Your Cart Items" : "No cart items available please add some cart items. "}
        </h2>
            {
                products.map(product =>(
                    <div className=' w-full flex  space-x-2 space-y-4'>
                        <img
                        className='h-24 w-24 rounded-lg  shadow object-cover'
                         src={product.thumbnail} 
                         alt={product.title}
                         />
                        <div className='w-full flex flex-col items-start '>
                            <h3 className='text-lg font-semibold'>{product.title}</h3>
                            <p className='text-sm text-gray-600'>{product.description}</p>
                            <div className='w-full flex items-center  justify-between'>
                                <div className='space-x-2 flex items-center '>
                                    <span className='text-2xl text-pink-600 font-semibold '>${product.price.toFixed(2)}</span>
                                    <label className='space-x-2'>
                                        <span className='text-lg font-semibold '>Quantity</span>
                                        <input className='w-10 h-8 px-1 border text-center border-gray-300 rounded' type="number" />
                                    </label>
                                </div>
                                <button className='text-pink-600 hover:text-pink-700 transition-colors duration-200 cursor-pointer '>
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

import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='bg-white  shadow hover:shadow-lg rounded border border-gray-300 transition-shadow duration-200 ease-in'>
                           
    <img 	className="w-full h-48 object-cover" src={product.image} alt={product.name} />
    <div className='p-4'>
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className="text-gray-700 truncate ">{product.description}</p>
      <div className='flex justify-between items-center '>
          <span className='text-blue-600 font-semibold'>${product.price.toFixed(2)}</span>
          <span className='text-sm text-gray-700 '>{product.stock > 0 ?`${product.stock } in stock`: "out stock"} </span>
      </div>
      <div >
          <span className='text-yellow-300' >{"★".repeat(Math.round(product.rating)) }</span>
          <span className='text-gray-400'>{"★".repeat(Math.round(5 - product.rating))}</span>
      </div>
    </div>
  </div>
  )
}

export default ProductItem

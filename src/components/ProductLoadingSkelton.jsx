import React from 'react'

const ProductLoadingSkelton = () => {
  return (
    <div className='max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2'>
      {
        Array(9).fill().map((_ , index) =>(
          <div key={index} className=' rounded-lg overflow-hidden p-4'>
                               
          <div 	className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse " ></div>
          <div 	className="w-3/4 h-6 mt-4 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse " ></div>
          <div 	className="w-1/2 h-5 mt-4 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse " ></div>
        </div>
        ))
      }
   
      </div>
  )
}

export default ProductLoadingSkelton

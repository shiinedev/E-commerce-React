import React from 'react'

const ProductDetailsSkeleton = () => {
  return (
    
    <div className="p-4 mt-4 animate-pulse">
    <div  className="bg-gradient-to-r from-gray-200 to-gray-300 h-6 w-1/2 mb-4" >
     </div>

    <div className="md:flex">
      <div className="md:w-1/2 ">
        <div className="w-full   h-96 rounded-lg shadow bg-gradient-to-r from-gray-200 to-gray-300" > </div>
          
       
        <div className="mt-4 w-full flex gap-4 overflow-auto">
        
          
   <div className="w-25  h-24 rounded-lg shadow  bg-gradient-to-r from-gray-200 to-gray-300" > </div>
        
   <div className="w-25  h-24 rounded-lg shadow  bg-gradient-to-r from-gray-200 to-gray-300" > </div>
   <div className="w-25  h-24 rounded-lg shadow  bg-gradient-to-r from-gray-200 to-gray-300" > </div>
   <div className="w-25  h-24 rounded-lg shadow  bg-gradient-to-r from-gray-200 to-gray-300" > </div>
        
          </div>
      </div>
      <div className="md:w-1/2 pl-4">
        <div className=" h-6 bg-gradient-to-r from-gray-200 to-gray-300 mb-2"></div>
        <div className=" h-6 bg-gradient-to-r from-gray-200 to-gray-300 mb-2"></div>
        <div className=" h-6 bg-gradient-to-r from-gray-200 to-gray-300 mb-2"></div>
        <div className='flex justify-between items-center mt-4'>
        <span className='w-1/4 h-6 bg-gradient-to-r from-gray-200 to-gray-300 mb-2 '></span>
        <span className='w-1/4 h-6 bg-gradient-to-r from-gray-200 to-gray-300 mb-2 '></span>
        
    </div>
        <div className="mt-4 flex space-x-2">
        <div className='w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300 '></div>
        <div className='w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300 '></div>
        <div className='w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300 '></div>
        <div className='w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300 '></div>
        </div>
        <div to="/products" className='h-10 w-1/3 bg-gradient-to-r rounded-lg  from-gray-200 to-gray-300 mt-4 '>
      </div>
      </div>
      
    </div>
   
  </div>
  )
}

export default ProductDetailsSkeleton

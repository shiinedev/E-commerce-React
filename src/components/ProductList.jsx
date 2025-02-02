import React from 'react'
import Products from "../assets/ProductData.json"
import ProductItem from './ProductItem'
const ProductList = () => {
  return (
    <div className='max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2'>
        {
            Products.length > 0 ?(
                
             Products.map(product =>(
                        <ProductItem product={product} />
                    ))
                
            )
            :
            <p>no products available</p>
        }
    </div>
  )
}

export default ProductList


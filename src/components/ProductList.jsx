import React, { useEffect, useState } from 'react'
// import products from "../assets/ProductData.json"
import ProductItem from './ProductItem'
import ProductLoadingSkelton from './ProductLoadingSkelton';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(()=>{
    const fetchData = async () =>{
      try {
        setIsLoading(true);
        const response =  await fetch("https://dummyjson.com/products");
      
        const {products} = await response.json();
        // console.log(products)
        setProducts(products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        
      }
    }

    fetchData();
  },[]);

  if(isLoading) return <ProductLoadingSkelton />

  return (
    <div className='max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2'>
        {
            products ?(
                
              products.map(product =>(
                        <ProductItem key={product.id} product={product} />
                    ))
                
            )
            :
            <p className='text-xl font-bold'>No products available.</p>
        }
    </div>
  )
}

export default ProductList


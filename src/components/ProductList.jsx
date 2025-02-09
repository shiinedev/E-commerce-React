import React, { useEffect, useRef, useState } from 'react'
// import products from "../assets/ProductData.json"
import ProductItem from './ProductItem'
import ProductLoadingSkelton from './ProductLoadingSkelton';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const [originalProducts,setOriginalProducts] = useState([]);

  const searchRef = useRef(null);

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        setIsLoading(true);
        const response =  await fetch('https://dummyjson.com/products?limit=100&skip=100');
      
        const {products} = await response.json();
        // console.log(products)
        setProducts(products);
        setOriginalProducts(products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        
      }
    }

    fetchData();
  },[]);

  useEffect(() => {
    const timerId = setTimeout(()=>{
      setDebounceQuery(query);
    },300);

    return () => {
      clearTimeout(timerId);
    };
  },[query])

  useEffect(()=>{
    if(debounceQuery){
      const fetchData = async () =>{
        try {
          setIsLoading(true);
          const response =  await fetch(`https://dummyjson.com/products/search?q=${query}`);
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
    }else{
      setProducts(originalProducts);
    }
   
  },[debounceQuery]);

  useEffect(() => {
    if(searchRef.current){
      searchRef.current.focus();
    }
  },[products])

  if(isLoading) return <ProductLoadingSkelton />

  return (
    <div className='px-2'>
 
    <input
    ref={searchRef}
    className=' w-full border rounded outline-blue-400  px-3 py-2 font-medium text-lg mt-4'
     type="text"
     placeholder='Search product'
     value={query}
     onChange={(e) => setQuery(e.target.value)}
      />

    <div className='max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  '>
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
    </div>
  )
}

export default ProductList


import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import { ShopContext } from "../ShopContext";

const ProductDetails = () => {

  const {AddItemToCart} = useContext(ShopContext);
  console.log(AddItemToCart);
  
 
  const {id} = useParams();
  const navigate = useNavigate();
  
  const [product , setProduct] = useState(null);
  const [mainImage,setMainImage] = useState("");

  useEffect(()=>{
    const getProduct = async () =>{
      try {
       const response = await fetch(`https://dummyjson.com/products/${id}`);
       const result = await response.json();
       setProduct(result);
       setMainImage(result);
        
      } catch (error) {
        console.error(error)
      }
    }
    getProduct();
  },[id])
  if(!product) return <ProductDetailsSkeleton />
  return (
    <div className="p-4 mt-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200 cursor-pointer "
      >
        Go Back
      </button>

      <h3 className="text-2xl font-semibold my-5">{product.title}</h3>
      <div className="md:flex">
        <div className="md:w-1/2 w-full">
          <img
            className="w-full   h-96 rounded-lg shadow object-cover"
            src={mainImage}
            alt={product.title}
          />
          <div className="mt-4 w-full flex gap-4 overflow-auto">
          {product.images.map((image, index) => (
            
              <img
              onClick={() => setMainImage(image)}
                key={index}
                className="h-24 w-24 cursor-pointer rounded-lg space-x-4 shadow object-cover "
                src={mainImage}
                alt={product.title}
              />
          
          ))}
            </div>
        </div>
        <div className="md:w-1/2 w-full ml-4">
          <p className="text-gray-600">{product.description}</p>
          <div className='flex justify-between items-center mt-4'>
          <span className='text-pink-600 font-semibold text-2xl'>${product.price}</span>
          <span className='text-sm text-gray-700 '>{product.stock > 0 ?`${product.stock } in stock`: "out stock"} </span>
      </div>
          <div className="mt-4">
            <span className="text-yellow-300">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-400">
              {"★".repeat(Math.round(5 - product.rating))}
            </span>
            <span className='text-gray-400 text-base'> {product.rating.toFixed(1)} </span>
          </div>
          <button 
          onClick={() => AddItemToCart(product)}
          className='bg-pink-600 mt-4 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200 cursor-pointer '>
        Add To Cart</button>
        </div>
        
      </div>
     
    </div>
  );
};

export default ProductDetails;

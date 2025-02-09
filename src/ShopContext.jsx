import {  createContext, useContext, useEffect } from "react";

import { reducer,initialState } from "./ShopReducer";
import { useReducer } from "react";

export const ShopContext = createContext(initialState);

 export const ShopProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
        localStorage.setItem("cartItems",JSON.stringify({
            products:state.products,
            total:state.total
        }))
    },[state]);

    const calculateTotalPrice = (products) =>{
        let total = 0;
       products.forEach(product => 
             total += product.price * product.quantity 
        );

        dispatch({
            type:"CalculateTotal",
            payload:total
        })
    }

    const AddItemToCart = (product) =>{

        const productIndex = state.products.findIndex(p => p.id === product.id);
        let updatedProducts = [...state.products];

        if(productIndex !== -1){
            updatedProducts[productIndex] = {
                ...updatedProducts[productIndex],
                quantity : updatedProducts[productIndex].quantity +1
            }
        }else{
            updatedProducts = [
                ...updatedProducts,
                {
                    ...product, quantity:1
                }  
        ]
        }
        //calling calculateTotalPrice function
        calculateTotalPrice(updatedProducts);

        //adding item to cart
        dispatch({
            type:"AddItem",
            payload:updatedProducts
        })
    }


    const updateQuantity = (product,newQuantity) =>{

        const productIndex = state.products.findIndex(p => p.id === product.id);
        

        let updatedProducts = [...state.products];

        if(newQuantity <= 0){
            updatedProducts = updatedProducts.filter(p => p.id !== product.id);
        }else{
            updatedProducts[productIndex] = {
                    ...updatedProducts[productIndex],quantity:newQuantity
                }
            
        }

        //calling calculate Total
        calculateTotalPrice(updatedProducts);

        dispatch({
            type:"UpdateQuantity",
            payload:updatedProducts
        })
    }

    const removeItemFromCart = (product) =>{
        const updatedProducts = state.products.filter(p => p.id !== product.id);

        //calling calculate Total
        calculateTotalPrice(updatedProducts);

        dispatch({
            type:"RemoveItem",
            payload:updatedProducts
        })
    }

    const clearCart  = () => {
        dispatch({
            type:"ClearCart",
            
        })
    }

    const value = {
        products:state.products,
        total:state.total,
        AddItemToCart,
        updateQuantity,
        removeItemFromCart,
        clearCart
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
   
}



 const useShop = ()=>{
    const context = useContext(ShopContext);
    if(context === undefined){
        throw new Error("Context must be in shopContext !");
    }

    return context;
}

export default useShop;
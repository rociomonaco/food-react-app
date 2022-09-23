import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [productsCart, setProductsCart] = useState([]);    
    
    const addProduct = (product, count)=>{
        console.log(product.quantity)
        let newListCart = [...productsCart];
        if(!isInCart(product.id)){
            const newProduct = {...product, quantity:count, totalPrice: count*product.price};
            newListCart = [...productsCart, newProduct];
        }else{
            const productIndex = productsCart.findIndex(element => element.id === product.id)
            newListCart[productIndex].quantity = newListCart[productIndex].quantity + count;
            newListCart[productIndex].totalPrice = newListCart[productIndex].quantity * newListCart[productIndex].price; 
        }
        setProductsCart(newListCart);

    }
    const removeProduct = (idProduct) =>{
        const updatedProductsCart =  productsCart.filter(item => item.id !== idProduct);
        setProductsCart(updatedProductsCart);
    }
    const removeCart = ()=>{
        setProductsCart([]);
    }
    
    const isInCart = (id)=>{
        const existProduct = productsCart.some(item => item.id === id)
        return existProduct
    }
    
    const getTotalPrice = ()=>{
        const totalPriceCart = productsCart.reduce((total, itemPrice) => total + itemPrice.totalPrice, 0);
        return totalPriceCart
    }
    const getQuantityProducts = ()=>{
        let totalQuantityProducts = 0;
        productsCart.forEach(item =>{
            totalQuantityProducts += item.quantity 
        })
        return totalQuantityProducts;
    }
    getQuantityProducts()
    return (
        <CartContext.Provider value={{productsCart, addProduct, removeProduct, removeCart, getQuantityProducts, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}
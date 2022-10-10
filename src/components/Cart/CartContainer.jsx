
import { React, useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {CartItem} from "./CartItem"
import {Order} from "./Order"
import "./css/cart.css"


export const CartContainer = () =>{
    const {productsCart, removeCart, getTotalPrice} = useContext(CartContext)
 
    return (

        productsCart.length>0 ?
        <>
        {
            <div className="container-cart">
                <div className="container_cartHeader">
                    <h1>Cart</h1>
                    <button className="removeCart" onClick={removeCart}>Empty Cart</button>
                </div>
                <ul className="container_cartItems">
                    {
                        productsCart.map( (product) =>(
                            <CartItem  key={product.id} item={product}/>
                        ))

                    }
                </ul>
                <p><b>Total Price Cart : ${getTotalPrice()}</b></p>
                
                <Order />
                
            </div>
        }
        </>
        :
        <p class="stateCart">No products in cart</p>

        
    )

}
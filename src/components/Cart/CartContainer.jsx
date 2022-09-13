
import { React, useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {CartItem} from "./CartItem"

import "./css/cart.css"
export const CartContainer = () =>{
    const {productsCart, removeCart} = useContext(CartContext)

    return (
        
        productsCart.length>0 ?
        <>
        {
            <div className="container-cart">
                <div class="container_cartHeader">
                    <h1>Cart</h1>
                    <button class="removeCart" onClick={removeCart}>Empty Cart</button>
                </div>
                <ul className="container_cartItems">
                    {
                        productsCart.map( (product) =>(
                            <CartItem  key={product.id} item={product}/>
                        ))

                    }
                </ul>
            </div>
        }
        </>
        :
        <p class="stateCart">No products in cart</p>

        
    )

}

import { React, useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {CartItem} from "./CartItem"
import "./css/cart.css"
import {db} from "../../utils/firebase"
import {collection, addDoc} from "firebase/firestore"

export const CartContainer = () =>{
    const {productsCart, removeCart, getTotalPrice} = useContext(CartContext)
    const [idOrder, setIdOrder] = useState(0);
    const sendOrder = (e)=>{
        e.preventDefault();
        console.log(e)

        let inputName = e.target[0].value;
        let inputSurname = e.target[1].value;
        let inputEmail = e.target[2].value;
        const order= {
            buyer:{
                name: inputName,
                surname: inputSurname,
                email: inputEmail
            },
            items: productsCart,
            total: getTotalPrice(),
            date: new Date().toLocaleDateString()
        }
        console.log(order)
        //crear ref en la db de donde voy a guardar el doc
        const queryRef = collection(db, "orders");
        //agregar el doc
        addDoc(queryRef, order).then(res => setIdOrder(res ));
    }
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
                
                <form onSubmit={sendOrder}>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                    <input type="text" name="surname" id="surname"  placeholder="Surname"/>
                    <input type="email" name="email" id="email"  placeholder="Email"/>
                    <button type="submit">Enviar Orden</button>
                </form>
                <div>
                    {idOrder!= 0 ? idOrder : ""}
                </div>
            </div>
        }
        </>
        :
        <p class="stateCart">No products in cart</p>

        
    )

}
import { React, useContext, useState } from "react"
import { db } from "../../utils/firebase"
import { collection, addDoc } from "firebase/firestore"
import { CartContext } from "../../context/CartContext"


export const Order = () => {
    const {productsCart, getTotalPrice} = useContext(CartContext)

    const [idOrder, setIdOrder] = useState(0);
    const sendOrder = (e) => {
        e.preventDefault();
        console.log(e)

        let inputName = e.target[0].value;
        let inputSurname = e.target[1].value;
        let inputEmail = e.target[2].value;
        const order = {
            buyer: {
                name: inputName,
                surname: inputSurname,
                email: inputEmail
            },
            items: productsCart,
            total: getTotalPrice(),
            date: new Date().toLocaleDateString()
        }
        //crear ref en la db de donde voy a guardar el doc
        const queryRef = collection(db, "orders");
        //agregar el doc
        addDoc(queryRef, order).then(res => console.log(setIdOrder(res.id))) 
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
    }

    return (

        <div className="formContainer">
            <p>Send your order</p>
            <form onSubmit={sendOrder}>
                <div>
                    <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div>
                    <input type="text" name="surname" id="surname" placeholder="Surname" />
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div>
                    <button type="submit">Enviar Orden</button>
                </div>
            </form>
            <div>
                {idOrder != 0 ? "The order number is" + idOrder : ""}
            </div>
        </div>
    )

}
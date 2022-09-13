import { CartContext } from "../../context/CartContext"
import { useContext } from "react";

export const CartItem = ({item}) =>{
    const {removeProduct} = useContext(CartContext);
    return(
        <div className="itemCart">
            <div className="itemCart__containerImg">
                {/* img */}
            </div>

            <div>
                <h2>{item.title}</h2>
                <p>- {item.quantity} x ${item.price}</p>
                <p>Total price: ${item.totalPrice}</p>
            </div>
            <div>
                <button className="clearCartItem" onClick={()=>removeProduct(item.id)}>Delete</button>
            </div>
        </div>
    )
}
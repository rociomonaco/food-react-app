import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./css/details.css"
export const ItemDetail = ({item}) =>{
    const {addProduct} = useContext(CartContext);
    const [contador, setContador] = useState(0);
    const [quantity, setQuantity] = useState(0);


    const incrementar = ()=>{
        if(contador< item.stock){
            setContador(contador +1);
        }
    }
    const decrementar = () =>{
        if(item.stock>0){
            setContador(contador -1);
        }
    }
    const agregarProducto = (count)=>{
        addProduct(item, count);
        setQuantity(count);
    }
    return(
        <div className="itemDetailContainer">
            <div className="itemDetail__containerImg">
                {/* img */}
            </div>

            <div>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
                <p>$ {item.price}</p>
                <div className="container-quantity">
                    <button onClick={incrementar}>+</button>
                    <p>{contador}</p>
                    <button onClick={decrementar}>-</button>
                </div>
                <div class="containerButtons">
                    <button className="buttonAddToCart" onClick={()=>agregarProducto(contador)}>Agregar al carrito</button>
                    {
                        quantity > 0 &&
                        <Link to="/cart">
                            <button className="buttonAddToCart">Finalizar Compra</button>
                        </Link>
                    }
                </div>
                
            </div>
        </div>
    )
}
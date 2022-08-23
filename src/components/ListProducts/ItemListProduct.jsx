import { useState } from "react";

export const ItemListProduct = ({img, title, price, stock, agregarProducto}) =>{
    const [contador, setContador] = useState(0);
    const incrementar = ()=>{
        if(contador< stock){
            setContador(contador +1);
        }
    }
    const decrementar = () =>{
        if(contador>0){
            setContador(contador -1);
        }
    }
    return (
        <div className="item-list-product">
            <div>
                <img src={img}/>
            </div>
            <p className="item-list-product__text">{title}</p>
            <p>${price}</p>
            <div className="container-quantity">
                <button onClick={incrementar}>+</button>
                <p>{contador}</p>
                <button onClick={decrementar}>-</button>
            </div>
            <button onClick={()=>(agregarProducto(contador))}>Agregar al carrito</button>
        </div>
    )
}
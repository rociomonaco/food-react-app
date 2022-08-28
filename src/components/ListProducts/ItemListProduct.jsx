import { useState } from "react";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers"

import produto from '../../Assets/product1.png'
export const ItemListProduct = ({img, title, price, stock, agregarProducto}) =>{
    const loadImage = imagen => (require(`../../Assets/${imagen}.png`));
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
   
   
console.log(img)
console.log(loadImage)
    return (
        <div className="item-list-product">
            <div>
          <img src={loadImage(img)}/>
            </div>
            <p className="item-list-product__text">{title}</p>
            <p>${price}</p>
            <div className="container-quantity">
                <button onClick={incrementar}>+</button>
                <p>{contador}</p>
                <button onClick={decrementar}>-</button>
            </div>
            <button className="buttonAddToCart" onClick={()=>(agregarProducto(contador))}>Agregar al carrito</button>
        </div>
    )
}
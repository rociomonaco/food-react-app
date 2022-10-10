import { useState } from "react";
import {Link} from "react-router-dom"
export const ItemListProduct = ({id, img, title, price, stock, agregarProducto}) =>{
    const loadImage = imagen => (require(`../../Assets/${imagen}.png`));

    return (
        <div className="item-list-product">
            <div>
                <img src={img}/>
            </div>
            <p className="item-list-product__text">{title}</p>
            <p>${price}</p>
            <Link className="buttonCart" to={`/product/${id}`}>Ver Detalle</Link>
        </div>
    )
}
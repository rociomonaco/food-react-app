import {ItemListProduct} from "./ItemListProduct"
import product1 from "../../Assets/product-1.png"
import product2 from "../../Assets/product-2.png"
import product3 from "../../Assets/product-3.png"
import product4 from "../../Assets/product-4.png"
import product5 from "../../Assets/product-5.png"
import product6 from "../../Assets/product-6.png"
import product7 from "../../Assets/product-7.png"
import product8 from "../../Assets/product-8.png"
import product9 from "../../Assets/product-9.png"
import { useState } from "react"
import "./css/listproducts.css"
export const ItemListContainer = () =>{
    const [cantidadProductos, setNumero] = useState(0);
    const agregar = (contador) =>{
        console.log("contador",contador)
        console.log("cantidadProductos",cantidadProductos)
        setNumero(contador + cantidadProductos);
    }
    return (
        <div>
            <h1>Cantidad de productos en el carrito {cantidadProductos}</h1>
            <div className="item-list-container">
                <ItemListProduct img={product1} title="Spicy seasoned seafood noodles" price={1600} stock={10} agregarProducto={agregar}/>
                <ItemListProduct img={product2} title="Salted Pasta with mushroom sauce" price={1600} stock={10} agregarProducto={agregar}/>
                <ItemListProduct img={product3} title="Beef dumpling in hot and sour soup" price={1600} stock={10} agregarProducto={agregar}/>
                <ItemListProduct img={product4} title="Healthy noodle with spinach leaf" price={1600} stock={10} agregarProducto={agregar}/>
                <ItemListProduct img={product5} title="Hot spicy fried rice with omelet" price={1600} stock={10} agregarProducto={agregar}/>
                <ItemListProduct img={product6} title="Spicy instant noodle with special omelette" price={1600} stock={10} agregarProducto={agregar}/>
            </div>
        </div>
    )
}
import {ItemListProduct} from "./ItemListProduct"

import { useState, useEffect} from "react"
import "./css/listproducts.css"
export const ItemListContainer = () =>{
    const [cantidadProductos, setNumero] = useState(0);
    const [productos, setProductos] = useState([]);
    const agregar = (contador) =>{
        setNumero(contador + cantidadProductos);
    }

    const obtenerProductos = async() =>{
        fetch("https://6308241546372013f576e16e.mockapi.io/api/foodproducts/products")
        .then((res) =>{
            return res.json();
        })
        .then((productos) =>{
            setProductos(productos);
        })
    }
    useEffect(() => {
        obtenerProductos();
    }, [])
    return (
        <div>
            <h1>Cantidad de productos en el carrito {cantidadProductos}</h1>
            <div className="item-list-container">
                {
                    productos.map((producto)=>{
                        return(
                            <ItemListProduct img={producto.img} title={producto.title} price={producto.price} stock={producto.stock} agregarProducto={agregar}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
import {ItemDetail} from "./ItemDetail"
import { useEffect, useState } from "react"

export const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({});

    const obtenerProducto = async() =>{
        fetch("https://6308241546372013f576e16e.mockapi.io/api/foodproducts/products")
        .then((res) =>{
            return res.json();
        })
        .then((productos) =>{
            setProducto(productos.find(producto => producto.id == 1));
        })
    }
    console.log("producto", producto)
    useEffect(() => {
        obtenerProducto();
    }, [])

    return(
        <div className="itemsDetailContainer">
            <ItemDetail title={producto.title} detail={producto.detail} key={producto.id} stock={producto.stock}/>
        </div>
    )

}
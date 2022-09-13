import { ItemDetail } from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [producto, setProducto] = useState({});

    const obtenerContadorDeProductos = (contador)=>{
        console.log("Agregué ", contador, " productos")
    }

    const obtenerProducto = async() =>{
        fetch("https://6308241546372013f576e16e.mockapi.io/api/foodproducts/products")
        .then((res) =>{
            return res.json();
        })
        .then((productos) =>{
            setProducto(productos.find(producto => producto.id == id));
        })
    }
    useEffect(() => {
        obtenerProducto();
    }, [id])

    return(
        <div className="itemsDetailContainer">
            <ItemDetail  key={producto.id} item={producto}/>
        </div>
    )

}
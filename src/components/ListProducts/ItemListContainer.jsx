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
import { useState, useEffect} from "react"
import "./css/listproducts.css"
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers"
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
                        const loadImage = imageName => (require(`../../Assets/product-${imageName}.png`).default);
                        return(
                            <ItemListProduct img={loadImage(producto.img)} title={producto.title} price={producto.price} stock={producto.stock} agregarProducto={agregar}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
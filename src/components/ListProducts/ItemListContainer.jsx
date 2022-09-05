import { ItemListProduct } from "./ItemListProduct"
import { useParams } from "react-router-dom"

import { useState, useEffect} from "react"
import "./css/listproducts.css"

export const ItemListContainer = () =>{
    const {typeOfProduct} = useParams();
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
            if(!typeOfProduct){
                setProductos(productos);
            }else{
                const filterProducts = productos.filter(item => item.category === typeOfProduct);
                setProductos(filterProducts);
            }
        })
    }
    useEffect(() => {
        setTimeout(()=>{
            obtenerProductos();
        },2000)
    }, [typeOfProduct])
    
    return (
        <div>
            <div className="item-list-container">
                {
                    productos.map((producto)=>{
                        return(
                            <ItemListProduct key={producto.id} id={producto.id} title={producto.title} price={producto.price} stock={producto.stock} agregarProducto={agregar}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

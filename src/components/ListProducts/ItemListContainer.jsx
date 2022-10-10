import { ItemListProduct } from "./ItemListProduct"
import { useParams } from "react-router-dom"

import { useState, useEffect} from "react"
import "./css/listproducts.css"
import { CartFilter } from "../CartFilter/CartFilter"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../utils/firebase"

export const ItemListContainer = () =>{
    const {typeOfProduct} = useParams();
    const [cantidadProductos, setNumero] = useState(0);
    const [productos, setProductos] = useState([]);
    const agregar = (contador) =>{
        setNumero(contador + cantidadProductos);
    }

    const obtenerProductos = async() =>{
        try{
            let queryRef = "";
            if(!typeOfProduct){
                queryRef = collection(db, "items");
            }else{
                queryRef = query(collection(db, "items"), where("category", "==", typeOfProduct));
            }
            const response = await getDocs(queryRef);
            const datos = response.docs.map(doc => {
                const newDoc = {
                    ...doc.data(),
                    id:doc.id
                }
                return newDoc;
            });
            setProductos(datos);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        setTimeout(()=>{
            obtenerProductos();
        },2000)
    }, [typeOfProduct])
    
    return (
        <div>
            <CartFilter/>

            <div className="item-list-container">
                {
                    productos.map((producto)=>{
                        return(
                            <ItemListProduct key={producto.id} id={producto.id} title={producto.title} price={producto.price} stock={producto.stock} img={producto.img} agregarProducto={agregar}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

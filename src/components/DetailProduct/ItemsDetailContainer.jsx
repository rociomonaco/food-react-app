import { ItemDetail } from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, query } from "firebase/firestore"
import { db } from "../../utils/firebase"

export const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [producto, setProducto] = useState({});

    const obtenerProducto = async() =>{
        const queryRef = doc(db,"items", id);
        getDoc(queryRef).then(response =>{
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            setProducto(newDoc)
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
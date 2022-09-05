import { useState } from "react";
export const ItemDetail = ({title, detail, stock, price, obtenerContadorDeProductos}) =>{
    const [contador, setContador] = useState(0);

    const incrementar = ()=>{
        if(contador< stock){
            setContador(contador +1);
            console.log("contador",contador)
        }
    }
    const decrementar = () =>{
        if(contador>0){
            setContador(contador -1);
        }
    }
    const agregarProducto = ()=>{
        obtenerContadorDeProductos(contador);
    }
    return(
        <div className="itemDetailContainer">
            <div className="itemDetail__containerImg">
                {/* img */}
            </div>

            <div>
                <h2>{title}</h2>
                <p>{detail}</p>
                <p>$ {price}</p>
                <div className="container-quantity">
                    <button onClick={incrementar}>+</button>
                    <p>{contador}</p>
                    <button onClick={decrementar}>-</button>
                </div>
                <button className="buttonCart" onClick={agregarProducto}>Agregar al carrito</button>
            </div>
        </div>
    )
}
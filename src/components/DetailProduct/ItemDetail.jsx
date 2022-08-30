import { useState } from "react";
export const ItemDetail = ({title, detail, key, stock}) =>{
    const [contador, setContador] = useState(0);

    const incrementar = ()=>{
        if(contador< stock){
            setContador(contador +1);
        }
    }
    const decrementar = () =>{
        if(contador>0){
            setContador(contador -1);
        }
    }
    return(
        <div className="itemDetailContainer">
            <div className="itemDetail__containerImg">
                {/* img */}
            </div>

            <div>
                <h2>{title}</h2>
                <p>{detail}</p>
                <p>stock: {stock}</p>
                <div className="container-quantity">
                    <button onClick={incrementar}>+</button>
                    <p>{contador}</p>
                    <button onClick={decrementar}>-</button>
                </div>
                <button className="buttonAddToCart">Agregar al carrito</button>
            </div>
        </div>
    )
}
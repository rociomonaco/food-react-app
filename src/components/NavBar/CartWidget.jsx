import "./css/navbar.css";
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const CartWidget = ({icono}) =>{
    const {getQuantityProducts} = useContext(CartContext)
    return (
        <div className="NavBar__item"><FontAwesomeIcon icon={icono} /> 
        {

            getQuantityProducts() > 0 &&
            <span className="ItemCart">{getQuantityProducts()}</span>

        }
        </div>
    )
}
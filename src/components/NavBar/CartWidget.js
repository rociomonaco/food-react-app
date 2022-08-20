import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const CartWidget = ({icono}) =>{
    return (
        <a className="NavBar__item"><FontAwesomeIcon icon={icono} /> <span class="ItemCart">5</span></a>
    )
}
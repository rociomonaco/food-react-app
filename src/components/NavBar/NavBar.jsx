import logo from "./img/Logo.png";
import "./css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartArrowDown, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {CartWidget} from "./CartWidget"
function NavBar(){
    return(
        <div className="Navbar">
            <div className="NavBarSection1">
                <a><img src={logo}/></a>
                <a className="NavBar__item NavBar__item--active"><FontAwesomeIcon icon={faHouse} /></a>
                <CartWidget icono={faCartArrowDown}></CartWidget>
            </div>
            <div className="NavBarSection2">
                <a className="NavBar__item"><FontAwesomeIcon icon={faArrowRightFromBracket} /></a>
            </div>
        </div>
    )
}
export default NavBar;
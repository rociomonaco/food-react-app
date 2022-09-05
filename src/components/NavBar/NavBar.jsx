import logo from "./img/Logo.png";
import "./css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartArrowDown, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {CartWidget} from "./CartWidget"
import {Link} from "react-router-dom"
function NavBar(){
    return(
        <div className="Navbar">
            <div className="NavBarSection1">
                <Link to="/"><img src={logo} alt="Logo"/></Link>
                <Link to="/" className="NavBar__item NavBar__item--active"><FontAwesomeIcon icon={faHouse} /></Link>
                <CartWidget icono={faCartArrowDown}></CartWidget>
            </div>
            <div className="NavBarSection2">
                <Link to="/" className="NavBar__item"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
            </div>
        </div>
    )
}
export default NavBar;
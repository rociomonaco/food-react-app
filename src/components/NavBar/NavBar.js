import logo from "./img/Logo.png";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartArrowDown, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
function NavBar(){
    return(
        <div className="Navbar">
            <div className="NavBarSection1">
                <a><img src={logo}/></a>
                <a className="NavBar__item NavBar__item--active"><FontAwesomeIcon icon={faHouse} /></a>
                <a className="NavBar__item"><FontAwesomeIcon icon={faCartArrowDown} /></a>
            </div>
            <div className="NavBarSection2">
                <a className="NavBar__item"><FontAwesomeIcon icon={faArrowRightFromBracket} /></a>
            </div>
        </div>
    )
}
export default NavBar;
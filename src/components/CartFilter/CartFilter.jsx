
import {NavLink} from "react-router-dom"
import "./css/filters.css"
export const CartFilter = () =>{
    return (
        <div className="container-filters">
            <ul className="list-filters">
                <li className="item-filter">
                    <NavLink className={({isActive}) => isActive ? "link-filter link-active" : "link-filter"} to="products">All</NavLink>
                </li>
                <li className="item-filter">
                    <NavLink className={({isActive}) => isActive ? "link-filter link-active" : "link-filter"} to="products/soup">Soup</NavLink>
                </li>
                <li className="item-filter">
                    <NavLink className={({isActive}) => isActive ? "link-filter link-active" : "link-filter"} to="products/hot-dishes">Hot Dishes</NavLink>
                </li>
                <li className="item-filter">
                    <NavLink className={({isActive}) => isActive ? "link-filter link-active" : "link-filter"} to="products/cold-dishes">Cold Dishes</NavLink>
                </li>
            </ul>
        </div>
    )

}
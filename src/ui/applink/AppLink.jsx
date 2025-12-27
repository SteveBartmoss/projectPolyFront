import { NavLink } from "react-router-dom";
import './applink.css'


export function AppLink({url, children}){
    return(
        <NavLink to={url} className="app-link">
            {children}
        </NavLink>
    )
}
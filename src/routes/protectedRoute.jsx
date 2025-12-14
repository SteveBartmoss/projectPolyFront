import { Navigate, Outlet } from "react-router-dom"



export const ProtectedRoute = ({children, redirect="/login"}) => {

    const user = JSON.parse(localStorage.getItem('session'))

    if(!user){
        return <Navigate to={redirect} />
    }

    return children ? children : <Outlet />
    
}
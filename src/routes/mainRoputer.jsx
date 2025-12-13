import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/login";


export function MainRouter(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
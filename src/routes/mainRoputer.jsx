import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/login";
import { ProtectedRoute } from "./protectedRoute";
import { AppRouter } from "./appRouter";


export function MainRouter(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/*" element={<AppRouter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
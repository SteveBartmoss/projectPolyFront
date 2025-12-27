import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/login";
import { ProtectedRoute } from "./protectedRoute";
import { AppRouter } from "./appRouter";
import { Register } from "../pages/register/register";
import { DivPanel } from "../ui/boxes/boxes";


export function MainRouter() {

    return (
        <DivPanel>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="/*" element={<AppRouter />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DivPanel>

    )
}
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Layout } from "../components/layout";


export function AppRouter() {

    return (
        <Layout>
            <Routes>
                <Route path="home" element={<Home />} />
            </Routes>
        </Layout>
    )
}
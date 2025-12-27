import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Layout } from "../components/layout";
import { Profile } from "../pages/profile/profile";


export function AppRouter() {

    return (
        <Layout>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </Layout>
    )
}
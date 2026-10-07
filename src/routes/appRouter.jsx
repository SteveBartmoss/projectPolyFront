import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Layout } from "../components/layout";
import { Profile } from "../pages/profile/profile";
import { ConfigProfile } from "../pages/configProfile/configProfile";
import UserProfile from "../pages/profile/userProfile";


export function AppRouter() {

    return (
        <Layout>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="profile/:id" element={<Profile />} />
                <Route path="profile-layout" element={<UserProfile />} />
                <Route path="config-profile" element={<ConfigProfile />} />
            </Routes>
        </Layout>
    )
}
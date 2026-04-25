import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes;
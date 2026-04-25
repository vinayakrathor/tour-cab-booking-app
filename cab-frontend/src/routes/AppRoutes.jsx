import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import TourPackages from "../pages/tourpackage";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/tour-packages" element={<TourPackages />} />
                     <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes;
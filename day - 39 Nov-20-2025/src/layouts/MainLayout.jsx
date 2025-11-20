import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/header";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
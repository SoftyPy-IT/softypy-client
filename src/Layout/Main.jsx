import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
const Main = () => {

    return (
        <div>
            <Outlet />
            <ScrollToTop smooth />
            <Footer />

        </div>
    );
};

export default Main;
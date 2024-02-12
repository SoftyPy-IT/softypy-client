import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

import { useEffect } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
const Main = () => {
    useEffect(() => {
        const handleScroll = () => {
          const button = document.getElementById("button");
          if (window.scrollY > 50) {
            button.classList.add("scrollToTopBtn");
          } else {
            button.classList.remove("scrollToTopBtn");
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      function scrollToTop() {
        window.scrollTo(0, 0);
        scroll.scrollToTop({ smooth: true });
      }
          // <ScrollToTop smooth />
    return (
        <div>
            <Outlet />
        
            <Footer />
            <button onClick={scrollToTop} id="button">
            <HiChevronDoubleUp size={25} />{" "}
          </button>
        </div>
    );
};

export default Main;
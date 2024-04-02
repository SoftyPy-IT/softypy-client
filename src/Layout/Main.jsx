import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { HiChatBubbleLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import MessageModal from "./MessageModal";
import { IoIosClose } from "react-icons/io";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import whatsapp from "../../public/assets/whatsapp.png";
import { CustomChat, FacebookProvider } from "react-facebook";
const Main = () => {
  const { darkMode } = useSelector((store) => store.theme);
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Generate a random temporary ID
    function generateTemporaryId() {
      return "user_" + Math.random().toString(36).substr(2, 9);
    }

    // Check if sessionStorage already has a temporary ID
    let temporaryId = Cookies.get("temporaryId");

    // If not, generate a new one and store it in sessionStorage
    if (!temporaryId) {
      temporaryId = generateTemporaryId();
      Cookies.set("temporaryId", temporaryId);
    }
  }, []);

  return (
    <div className={` ${darkMode ? "bg-black text-white" : ""}`}>
      <Outlet />

      <Footer />

      <div className="message rounded-full p-2 fixed bg-[#40C7F4] text-white bottom-14 right-1 cursor-pointer transition-all duration-75 ">
        {open ? (
          <IoIosClose
            onClick={handleClose}
            size={45}
            className="transition ease-in-out delay-75 "
          />
        ) : (
          <HiChatBubbleLeft
            className="transition ease-in-out delay-75 "
            onClick={handleOpen}
            size={45}
          />
        )}
      </div>

      <button onClick={scrollToTop} id="button">
        <HiChevronDoubleUp size={25} />
      </button>
      <Link
        to="https://wa.me/8801762380594?text=Hello how can I help you ?"
        target="_blank"
      >
        <button className="whatsApp">
          <img src={whatsapp} alt="" />
        </button>

        <FacebookProvider appId="321223840644901" chatSupport>
        <CustomChat pageId="123456789" minimized={true}/>
      </FacebookProvider>    



      </Link>
      {open && <MessageModal />}
    </div>
  );
};

export default Main;

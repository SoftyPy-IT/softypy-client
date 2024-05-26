/* eslint-disable no-unused-vars */
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import MessageModal from "./MessageModal";

import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import whatsapp from "../../public/assets/whatsapp.png";
import { Toaster } from "sonner";

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
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

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

      {/** 

        <div className="message rounded-full p-2 fixed bg-[#2D57A2] text-white bottom-5 right-1 cursor-pointer transition-all duration-75 shadowStyle">
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
*/}
      <button onClick={scrollToTop} id="button">
        <HiChevronDoubleUp size={25} />
      </button>

      {/**
   my appid: 321223840644901
   my pageid: 257323552817721

   softypy: 262323534563147

   

    
*/}

      {/** 
        <FacebookProvider
          className="messengerApp"
          appId="387557750848217"
          chatSupport
        >
          <CustomChat pageId="262323534563147" minimized={true} />
        </FacebookProvider>
        */}

      <Link
        to="https://wa.me/8801762380594?text=Hi! how can we help you ?"
        target="_blank"
      >
        <button className="whatsApp">
          <img src={whatsapp} alt="whatsapp" />
        </button>
      </Link>
      <Toaster position="bottom-right" />
      <ScrollRestoration />

      {open && <MessageModal />}
    </div>
  );
};

export default Main;

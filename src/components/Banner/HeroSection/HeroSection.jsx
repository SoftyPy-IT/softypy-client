/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import NavBar from "../../../pages/Shared/NavBar/NavBar";
import Container from "../../../ui/Container";
import ContactModal from "./ContactModal";
import "./HeroSection.css";
const HeroSection = () => {
  const [showText, setShowText] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prevShowText) => {
        if (prevShowText === 3) {
          return 1;
        } else {
          return prevShowText + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="header">
        <div className="navsBarWrap">
          <div className=" flex items-center text-[#fff]">
            <NavBar />
          </div>
          <Container>
            <div className="capitalize header-content">
              <div className="left-side">
                <h1 className="welcome-heading text-3xl md:text-5xl font-bold text-[#F81600]">
                  Next-gen enterprise
                </h1>
                <p className="mt-3 text-3xl font-semibold welcome-paragraph md:text-5xl">
                  software development company
                </p>

                <div className="items-center justify-between block w-full mt-10 text-white xl:flex xl:mt-20">
                  <h3 className="mb-3 text-3xl md:text-5xl xl:mb-0">
                    We Think <span className="text-[#F81600]">Future</span>
                    <span
                      className={
                        "text-[#F81600] futureText " +
                        (showText === 1 ? "show" : "")
                      }
                    >
                      Future
                    </span>
                    <span
                      className={
                        "text-[#F81600] futureText2 " +
                        (showText === 2 ? "show" : "")
                      }
                    >
                      New
                    </span>
                    <span
                      className={
                        "text-[#F81600] futureText3 " +
                        (showText === 3 ? "show" : "")
                      }
                    >
                      Value
                    </span>
                  </h3>
                  <button
                    onClick={handleOpen}
                    className="bg-[#F81600] w-44  md:w-60 py-3 rounded-sm text"
                  >
                    {" "}
                    Let's Talk{" "}
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {open && <ContactModal onClose={handleClose} />}
    </div>
  );
};

export default HeroSection;

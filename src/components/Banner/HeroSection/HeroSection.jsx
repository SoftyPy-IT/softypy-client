/* eslint-disable react/no-unescaped-entities */
import "./HeroSection.css";
import NavBar from "../../../pages/Shared/NavBar/NavBar";
import Container from "../../../ui/Container";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const [showText, setShowText] = useState(1);

  useEffect(() => {
    // After each animation cycle, toggle the showText state to display the next text item
    const interval = setInterval(() => {
      setShowText((prevShowText) => {
        if (prevShowText === 3) {
          return 1;
        } else {
          return prevShowText + 1;
        }
      });
    }, 5000); // Change this delay according to your animation duration

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      <div className="header">
        <div className="navsBarWrap">
          <div className=" flex items-center text-[#fff]">
          <NavBar/>
          </div>
        <Container>
        <div className="header-content capitalize">
        <div className="left-side">
          <h1 className="welcome-heading text-6xl font-semibold text-[#680C70]">
          Next-gen enterprise
          </h1>
          <p className="welcome-paragraph text-5xl font-semibold mt-3  ">
          software development company
          </p>

          <div className="flex w-full items-center justify-between text-white mt-20">
          <h3 className="text-5xl ">We Think <span className="text-[#F81600]">Future</span>
          <span className={"text-[#F81600] futureText " + (showText === 1 ? "show" : "")}>Future</span> 
          <span className={"text-[#F81600] futureText2 " + (showText === 2 ? "show" : "")}>New</span>
          <span className={"text-[#F81600] futureText3 " + (showText === 3 ? "show" : "")}>Value</span>
          </h3>
          <button className="bg-[#680C70] w-60 py-3 rounded-sm text"> Let's Talk </button>
          </div>

  {/** 
          <Link to="/contact">
            <button className="ExploreBtn "> <span>Explore Us </span><HiOutlineArrowNarrowRight/> </button>
          </Link>
*/}

        </div>
      </div>
        </Container>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

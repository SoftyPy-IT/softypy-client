import "./HeroSection.css";
import hero from "../../../../public/assets/hero.png";
import NavBar from "../../../pages/Shared/NavBar/NavBar";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div>
      <div className="header">
        <div className="navsBarWrap">
          <div className="bg-white h- flex items-center text-[#E61400]">
          <NavBar/>
          </div>
          <div className="header-content">
            <div className="left-side">
              <h1 className="welcome-heading">Welcome to SoftyPy !</h1>
              <p className="welcome-paragraph text-sm md:text-xl ">
                Accelerate Your Business Growth With Our Proven Digital
                Marketing Strategies 
                We help businesses of all sizes.
              </p>
              <Link to="/contact">
                <button className="ExploreBtn flex items-center justify-center"> <span>Explore Us </span><HiOutlineArrowNarrowRight/> </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

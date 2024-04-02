/* eslint-disable react/no-unescaped-entities */
import NavBar from "../Shared/NavBar/NavBar";
import Technologies from "../Home/ChoosUs/Technologies";
import Review from "../../components/Review/Review";
import Brand from "../../components/Brand/Brand";
import WorkPortfolio from "../../components/WorkPortfolio/WorkPortfolio";
import Container from "../../ui/Container";
import { useEffect, useRef } from "react";
import { HiCheck } from "react-icons/hi";
import HowSoftyPyWork from "./HowSoftyPyWork";
import Ready from "./Ready";
import PackagePrice2 from "./PackagePrice2";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
const Packages = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div>
      <div className="shadow-lg">
        <NavBar />
      </div>
      {/** 
       * 
      <div className=" portfolioHeroSection">
        <div className="navsBarWrap">
          <div className="text-white">
            <NavBar />
          </div>
          <div className=" portfolioContent">
            <h3 className="mb-2 text-3xl font-bold md:text-5xl">
              Best Website Development Packages.
            </h3>
          </div>
        </div>
      </div>
*/}
      <Container>
        <div className="my-16">
          <SectionTitle title=' "Crafting Digital Excellence: Elevate Your Brand with Our Bespoke Web Designs"' />
        </div>
        <section className="my-10 bg-[#951FE]">
          <div className="flex-col items-center justify-center lg:flex lg:flex-row lg:justify-between ">
            <div className="w-full lg:w-[50%]">
              <h3 className="text-xl font-semibold">
                Website Development Packages
              </h3>
              <h2 className="my-3 text-2xl font-semibold capitalize md:text-5xl ">
                Web Designs Starts from at the lowest price ONLY
              </h2>
              <p>
                "Transform Your Online Presence: With Softypy, get a
                custom-designed website starting from just ৳21,250. From sleek
                layouts to intuitive navigation, our expert team crafts a
                tailored digital experience that resonates with your audience.
                Don't miss out on this exclusive offer to elevate your brand
                without breaking the bank."
              </p>

              <ul className="mt-5 space-y-2 topPricingList">
                <li className="flex items-center ">
                  <HiCheck size={25} className="text-[#F81600] mr-2" />
                  <span>User-Friendly Design</span>
                </li>
                <li className="flex items-center ">
                  <HiCheck size={25} className="text-[#F81600] mr-2" />
                  <span>Mobile Responsiveness </span>
                </li>
                <li className="flex items-center ">
                  <HiCheck size={25} className="text-[#F81600] mr-2" />
                  <span>Fast Loading Speed </span>
                </li>
                <li className="flex items-center ">
                  <HiCheck size={25} className="text-[#F81600] mr-2" />
                  <span>High-Quality Content </span>
                </li>
                <li className="flex items-center ">
                  <HiCheck size={25} className="text-[#F81600] mr-2" />
                  <span>Clear Call-to-Actions (CTAs) </span>
                </li>
                <li className="flex items-center ">
                  <HiCheck size={25} className="text-[#F81600] mr-2" />
                  <span> High-Security </span>
                </li>
              </ul>
             <Link to='/contact'>
             <button className="bg-[#40C7F4] w-32  md:w-36 text-white mt-5 py-3 rounded-md ">
             Request Now
           </button>
             </Link>
            </div>
            <div className="mt-10 lg:mt-0 mx-auto packageLottieWrap lg:max-w-[50%]">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="/package.json"
              ></lottie-player>
            </div>
          </div>
        </section>
      </Container>

      <PackagePrice2 />
      <HowSoftyPyWork />
      <Container>
        <div className="flex flex-col justify-between pt-10 lg:flex-row">
          <h2 className="text-3xl md:text-[60px] leading-[60px] max-w-[100%] lg:w-[50%] font-semibold">
            Why Choose Our Web Design Packages ?{" "}
          </h2>
          <div className="mt-5 lg:mt-44 lg:w-[50%]">
            <p className="font-semibold">
              At SoftyPy we redefine web design. Our packages blend creativity
              and functionality to craft immersive digital experiences. Led by
              passionate storytellers, our team ensures your website stands out,
              resonates, and converts. From sleek interfaces to responsive
              designs, we prioritize aesthetics and usability. But we're not
              just about looks; we're about results. Our packages are engineered
              to meet your business goals, enhancing conversions, brand
              visibility, and user satisfaction. Don't settle for ordinary.
              Choose [Your Company Name] and elevate your online presence to
              extraordinary heights.
            </p>
          </div>
        </div>
      </Container>

      <Review />
      <Brand />

      <Technologies />
      <WorkPortfolio />
      {/** 
      <PackagePrice />
*/}
      <div className="sectionMargin">
        <Container>
          <div className="wantToTalk">
            <h2 className="text-4xl md:text-[50px] lg:w-[40%] w-full text-center font-semibold">
              Want to talks us ?{" "}
            </h2>
            <div className="mt-5 lg:mt-24 w-full text-center  xl:w-[60%]">
              <p className="text-3xl md:text-[80px]">softypy@gmail.com</p>
              <p className=" mt-14 mb-10 text-3xl md:text-[80px]">
                +88-01762-380594
              </p>
              <p className=" mt-14 mb-10 text-3xl md:text-[80px]">
                +88-01303042561
              </p>
              <button className="priceBtn">Contact Us</button>
            </div>
          </div>
        </Container>
      </div>
      <Ready />
    </div>
  );
};

export default Packages;

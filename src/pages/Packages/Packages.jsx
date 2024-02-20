/* eslint-disable react/no-unescaped-entities */
import NavBar from "../Shared/NavBar/NavBar";
import Technologies from "../Home/ChoosUs/Technologies";
import Review from "../../components/Review/Review";
import Brand from "../../components/Brand/Brand";
import WorkPortfolio from "../../components/WorkPortfolio/WorkPortfolio";
import PackagePrice from "../../components/MoreProducts/PackagePrice";
import Container from "../../ui/Container";
import { useEffect, useRef } from "react";
import { HiCheck } from "react-icons/hi";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MorePackages from "../../components/MoreProducts/MorePackages";
import HowSoftyPyWork from "./HowSoftyPyWork";
const Packages = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div>
      <div className=" portfolioHeroSection">
        <div className="navsBarWrap">
          <div className="text-white">
            <NavBar />
          </div>
          <div className=" portfolioContent">
            <h3 className="text-3xl md:text-5xl font-bold mb-2">
              Best Website Development Packages.
            </h3>
          </div>
        </div>
      </div>

      <Container>
        <div className="my-16">
          <SectionTitle
            title='
     "Crafting Digital Excellence: Elevate Your Brand with Our Bespoke Web Designs"'
          />
        </div>
        <section className="my-10 bg-[#951FE]">
          <div className="flex-col items-center lg:flex lg:flex-row justify-center lg:justify-between ">
            <div className="w-full lg:w-[50%]">
              <h3 className="text-xl font-semibold">
                Website Development Packages
              </h3>
              <h2 className="text-3xl md:text-5xl font-semibold my-3 capitalize ">
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
              <div className="space-y-2 mt-5">
                <div className="flex items-center ">
                  <HiCheck size={30} className="text-[#FD5302]" />
                  <span>Fast Loading (within 3 seconds)</span>
                </div>
                <div className="flex items-center ">
                  <HiCheck size={30} className="text-[#FD5302]" />
                  <span> Mobile Responsive</span>
                </div>
                <div className="flex items-center ">
                  <HiCheck size={30} className="text-[#FD5302]" />
                  <span> After Sales Support</span>
                </div>
                <div className="flex items-center ">
                  <HiCheck size={30} className="text-[#FD5302]" />
                  <span>Fast Loading (within 3 seconds)</span>
                </div>
                <div className="flex items-center ">
                  <HiCheck size={30} className="text-[#FD5302]" />
                  <span> Multiple Image Upload Option</span>
                </div>
                <div className="flex items-center ">
                  <HiCheck size={30} className="text-[#FD5302]" />
                  <span> Login with Facebook and Gmail</span>
                </div>
                <div className="flex items-center ">
                  <HiCheck size={30} className="text-[#FD5302]" />
                  <span> Product Image Zoom-in Capability</span>
                </div>
              </div>
              <div className="mt-5">
                <button className=" priceBtn requestBtn">Request Now </button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 w-full lg:w-[50%]">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="/package.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </section>
      </Container>
      <MorePackages />
      <HowSoftyPyWork />
      <Container>
        <div className="flex justify-between flex-col lg:flex-row ">
          <h2 className="text-3xl md:text-[60px] leading-[60px] w-[100%] lg:w-[50%] font-semibold">
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
      <PackagePrice />
      <div className="sectionMargin">
        <Container>
          <div className=" flex flex-col lg:flex-row md:justify-between justify-center">
            <h2 className="text-4xl md:text-[50px] lg:w-[40%] w-full text-center font-semibold">
              Want to talks us ?{" "}
            </h2>
            <div className="mt-5 lg:mt-24 w-full text-center  lg:w-[60%]">
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
    </div>
  );
};

export default Packages;

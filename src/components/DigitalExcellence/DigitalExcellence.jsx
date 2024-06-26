import { HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import Container from "../../ui/Container";
import { useEffect, useRef } from "react";

const DigitalExcellence = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <Container>
      <div className="my-16">
        <SectionTitle title=' "Crafting Digital Excellence: Elevate Your Brand with Our Bespoke Web Designs"' />
      </div>
      <section className="my-10 bg-[#951FE]">
        <div className="flex-col lg:items-start items-center justify-center lg:flex lg:flex-row lg:justify-between ">
          <div className="mt-10 lg:mt-0 mx-auto packageLottieWrap w-full lg:w-[40%] websiteAnimations">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="/package.json"
            ></lottie-player>
          </div>
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
              layouts to intuitive navigation, our expert team crafts a tailored
              digital experience that resonates with your audience. Don't miss
              out on this exclusive offer to elevate your brand without breaking
              the bank."
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
            <Link to="/contact">
              <button className="bg-[#1586FD] w-32  md:w-36 text-white mt-5 py-3 rounded-md ">
                Request Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DigitalExcellence;

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import portfolio from "../../../public/assets/app2.webp";
import portfolio2 from "../../../public/assets/app3.webp";
import portfolio3 from "../../../public/assets/app4.webp";
import portfolio4 from "../../../public/assets/app5.webp";
import portfolio5 from "../../../public/assets/app6.webp";
import portfolio6 from "../../../public/assets/app7.webp";
import portfolio7 from "../../../public/assets/app8.webp";
import portfolio8 from "../../../public/assets/app9.webp";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./AppDevelopment.css";
import { useEffect, useState } from "react";
const AppPortFolio = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="sectionMargin">
      <div className="mb-8 ml-20 ">
        <h3 className="text-5xl font-semibold">Latest Project </h3>
      </div>
      <Slider {...settings}>
        <div className="appSliderWraps">
          <div className="relative appPortFolioWrap ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Flight Management App</span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="relative appPortFolioWrap ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Live-Streaming </span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio2} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="relative appPortFolioWrap ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Flight Management App</span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio3} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="relative appPortFolioWrap ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Flight Management App</span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio4} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="relative appPortFolioWrap ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Podcast App </span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio5} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="relative appPortFolioWrap ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span>Auto Management App</span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio6} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="relative appPortFolioWrap ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Dollar Shave Club </span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio7} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="relative appPortFolioWrap ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Education App </span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio8} alt="portfolio" />
          </div>
        </div>
      </Slider>
      <div>
        <Link to='/contact'>
        <button className="bg-[#40C7F4] mt-10 text-white w-[200px] h-[45px] flex items-center justify-center ml-20 ">
          <span>Contact Us</span> <HiOutlineArrowNarrowRight className="ml-2" />
        </button>
        </Link>
      </div>

    </div>
  );
};

export default AppPortFolio;

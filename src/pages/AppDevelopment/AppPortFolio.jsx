import portfolio from "../../../public/assets/app2.webp";
import portfolio2 from "../../../public/assets/app3.webp";
import portfolio3 from "../../../public/assets/app4.webp";
import portfolio4 from "../../../public/assets/app5.webp";
import portfolio5 from "../../../public/assets/app6.webp";
import portfolio6 from "../../../public/assets/app7.webp";
import portfolio7 from "../../../public/assets/app8.webp";
import portfolio8 from "../../../public/assets/app9.webp";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import Slider from "react-slick";
import "./AppDevelopment.css";
const AppPortFolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="sectionMargin">
      <div className=" ml-20 mb-8">
        <h3 className="text-5xl font-semibold">Latest Project </h3>
      </div>
      <Slider {...settings}>
        <div className="appSliderWraps">
          <div className="appPortFolioWrap relative ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Flight Management App</span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="appPortFolioWrap relative ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Live-Streaming </span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio2} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="appPortFolioWrap relative ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Flight Management App</span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio3} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="appPortFolioWrap relative ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Flight Management App</span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio4} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="appPortFolioWrap relative ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Podcast App </span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio5} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="appPortFolioWrap relative ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span>Auto Management App</span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio6} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="appPortFolioWrap relative ">
            <h3 className="text-2xl font-bold absolute text-white z-[99] top-5 left-5 flex items-center ">
              {" "}
              <span> Dollar Shave Club </span>{" "}
              <HiOutlineArrowNarrowRight className="ml-3" size={35} />
            </h3>
            <img className="-z-10 " src={portfolio7} alt="portfolio" />
          </div>
        </div>
        <div className="appSliderWraps">
          <div className="appPortFolioWrap relative ">
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
        <button className="bg-[#680C70] mt-10 text-white w-[200px] h-[45px] flex items-center justify-center ml-20 ">
          <span>Contact Us</span> <HiOutlineArrowNarrowRight className="ml-2" />
        </button>
      </div>

    </div>
  );
};

export default AppPortFolio;

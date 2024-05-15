import "./Brancd.css";
import brand2 from "../../../public/assets/taqwaa2.png";
import brand3 from "../../../public/assets/ghuronti.png";
import brand4 from "../../../public/assets/global.png";
import brand5 from "../../../public/assets/nextstair2.png";
import brand6 from "../../../public/assets/buildtech.png";
import brand7 from "../../../public/assets/planner.png";
import brand8 from "../../../public/assets/arkaxis2.jpeg";
import brand9 from "../../../public/assets/trust-auto.png";
import brand10 from "../../../public/assets/swimming.png";
import brand11 from "../../../public/assets/foyez.png";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";

const Brand = () => {
  return (
    <div className="sectionMargin">
      <div>
        <SectionTitle title="Our Happy Clients "></SectionTitle>
        <div className="slidersWraps md:mt-10 lg:mt-16">
          <Marquee gradient={false} speed={30}>
            <div className="slider slickSliderImgWrap">
              <img src={brand2} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <img src={brand3} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <img src={brand4} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <img src={brand5} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <img src={brand6} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <img src={brand7} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <img src={brand8} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <img src={brand9} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <img src={brand10} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <img src={brand11} alt="brand" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Brand;

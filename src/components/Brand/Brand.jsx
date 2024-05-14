import "./Brancd.css";
// import brand from "../../../public/assets/brand5.png";
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
// import brand6 from "../../../public/assets/brand5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
const Brand = () => {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    speed: 5100,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   <div className="sectionMargin">
   <div >
     <SectionTitle title="Our Happy Clients "></SectionTitle>
     <div className="slidersWraps md:mt-10  lg:mt-16">
       <Slider {...settings}>
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
       </Slider>
     </div>
   </div>
   </div>
  );
};

export default Brand;

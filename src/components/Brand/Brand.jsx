import './Brancd.css'
import brand from '../../../public/assets/brand5.png'
import brand2 from '../../../public/assets/brand.png'
import brand3 from '../../../public/assets/brand2.png'
import brand4 from '../../../public/assets/brand3.png'
import brand5 from '../../../public/assets/brand4.png'
import brand6 from '../../../public/assets/brand5.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionTitle from '../../pages/Shared/SectionTitle/SectionTitle'
const Brand = () => {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,
        speed: 51000,
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
        <div className='brandWrap'>
          <SectionTitle title='Our Happy Clients '></SectionTitle>
             <div className="slidersWraps">
             <Slider {...settings}>
                <div className='slider'>
                    <img src={brand} alt="brand" />
                </div>
                <div className='slider'>
                    <img src={brand2} alt="brand" />
                </div>
                <div className='slider'>
                    <img src={brand3} alt="brand" />
                </div>
                <div className='slider'>
                    <img src={brand4} alt="brand" />
                </div>
                <div className='slider'>
                    <img src={brand5} alt="brand" />
                </div>
                <div className='slider'>
                    <img src={brand} alt="brand" />
                </div>
                <div className='slider'>
                    <img src={brand2} alt="brand" />
                </div>
                <div className='slider'>
                    <img src={brand6} alt="brand" />
                </div>
                <div className='slider'>
                    <img src={brand3} alt="brand" />
                </div>
              </Slider>
             </div>
        </div>
    );
};

export default Brand;
/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import  { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./SwiperTimeLine.css";
import { FaLocationArrow } from "react-icons/fa";
import { useRef, useEffect } from "react";
import icon from "../../../public/assets/icon.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";
import icon4 from "../../../public/assets/icon4.png";
import icon6 from "../../../public/assets/icon6.png";
import icon7 from "../../../public/assets/icon7.png";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import Container from "../../ui/Container";
AOS.init();

export default Arrow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <Container>
      <main className="chooseWrap">
       <div >
       <SectionTitle data-aos="zoom-in" title="Why Choose SoftyPy? Your Ideal IT Partner for Success "></SectionTitle>
       </div>

        <div data-aos="fade-up-left" className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <div className="smallHead">
                <h3 className="text-6xl "> 24/7 </h3>
                <p className="-mr-5">Support</p>
              </div>
              <div className="sliderWrap">
                <div className="sliderLeftSide">
                  <p className="md:text-xl ">
                    Advent International acquires and merges FieldEdge with
                    Clearent. FieldEdge operates as an independent subsidiary
                    under the Clearent Software Holdings portfolio of companies.
                  </p>
                </div>

                <div className="sliderRightSide">
                  <div className="circleWrap">
                    <div className="circle">
                      <img src={icon7} alt="computer" />
                    </div>
                    <div className="circle">
                      <img src={icon2} alt="computer" />
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide2">
            
              <div className="smallHead">
                <h3 className="text-6xl ">Design  </h3>
                <p className="-mr-5 mt-3">User Friendly </p>
              </div>
              <div className="sliderWrap">
                <div>
                  <p className="md:text-xl ">
                    Advent International acquires and merges FieldEdge with
                    Clearent. FieldEdge operates as an independent subsidiary
                    under the Clearent Software Holdings portfolio of companies.
                  </p>
                </div>
                <div className="sliderLeftSide">
                  <div className="circleWrap">
                    <div className="circle">
                      <img src={icon3} alt="computer" />
                    </div>
                    <div className="circle">
                      <img src={icon4} alt="computer" />
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
            <div className="smallHead">
                <h3 className="text-6xl ">Development  </h3>
                <p className="-mr-8">Full Stack </p>
              </div>
              <div className="sliderWrap">
                <div>
                  <p className="md:text-xl ">
                    Advent International acquires and merges FieldEdge with
                    Clearent. FieldEdge operates as an independent subsidiary
                    under the Clearent Software Holdings portfolio of companies.
                  </p>
                </div>

                <div className="sliderLeftSide">
                  <div className="circleWrap">
                    <div className="circle">
                      <img src={icon6} alt="computer" />
                    </div>
                    <div className="circle">
                      <img src={icon} alt="computer" />
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
              </div>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <div className="arrowWrap arrowWrap2">
              <div className="leftArrow">
                <FaLocationArrow
                  className="leftArrowIcon"
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
              </div>

              <div className="rightArrow">
                <FaLocationArrow
                  className="rightArrowIcon"
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </div>
            </div>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </main>
    </Container>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

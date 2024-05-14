/* eslint-disable react/no-unescaped-entities */
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
      <main className="chooseWrap sectionMargin">
       <div >
       <SectionTitle data-aos="zoom-in" title="Why Choose Us? "></SectionTitle>
       </div>

        <div data-aos="fade-up-left" className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <div className="smallHead">
                <h3 className=" md:text-3xl "> Expert Team, Exceptional Results</h3>
              </div>
              <div className="sliderWrap">
                <div className="sliderLeftSide">
                  <p className="md:text-xl ">
                  Behind every success story is a team of experts. At SoftyPy , our skilled professionals bring a wealth of experience and knowledge to the table. With a shared commitment to excellence.
                  {/* we tackle challenges head-on and turn them into opportunities. */}
                  </p>
                </div>

                <div className="sliderRightSide">
                  <div className="circleWrap">
                    <div className="circle">
                      <img src={icon7} alt="computer" />
                    </div>
                    <div className="circle hiddenCircle">
                      <img src={icon2} alt="computer"  />
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
                <h3 className="md:text-3xl ">Transparent Communication  </h3>
              </div>
              <div className="sliderWrap">
                <div className="sliderLeftSide">
                  <p className="md:text-xl ">
                  We believe in transparency. Throughout the project lifecycle, expect clear and open communication. We keep you informed, engaged, and confident in the progress and direction of your project.

                  </p>
                </div>
                <div className="sliderRightSide">
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
                <h3 className="md:text-3xl ">Quality Assurance as Standard  </h3>
              </div>
              <div className="sliderWrap">
                <div className="sliderLeftSide">
                  <p className="md:text-xl ">
                  Quality is not just a checkbox; it's ingrained in our culture. Rigorous testing processes and a commitment to excellence ensure that every product or service we deliver meets the highest industry standards.

                  </p>
                </div>

                <div className="sliderRightSide">
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
            <div className="keen-slider__slide number-slide3">
            <div className="smallHead">
                <h3 className="md:text-3xl ">Timely Delivery, Every Time </h3>
              </div>
              <div className="sliderWrap">
                <div className="sliderLeftSide">
                  <p className="md:text-xl ">
                  We understand the value of time. SoftyPY is dedicated to delivering projects on time, without compromising on quality. Trust us to meet your deadlines and exceed your expectations.


                  </p>
                </div>

                <div className="sliderRightSide">
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

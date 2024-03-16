/* eslint-disable react/display-name */
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./TopServices.css";
import { FaLocationArrow, FaArrowRight } from "react-icons/fa";
import { useRef, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
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
    <>
      <main className="topServicesWrap">
        <div>
         <SectionTitle title='Why Choose Us'></SectionTitle>
        </div>

        <div data-aos="fade-up-left" className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <div className="topServices ">
                <div className="topServicesLeft">
                  <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="/development2.json"
                    className="animation"
                  ></lottie-player>
                </div>

                <div className="topServiceRight">
                  <h2 className="text-4xl font-bold">
                    Web Design & Development{" "}
                  </h2>
                  <p className="my-3 leading-7">
                    {" "}
                    Web Designers are responsible for designing and building the
                    interface, navigation and aesthetic of websites for
                    businesses and clients. Likely working in the IT team of an
                    organisation or for a digital design agency that services
                    clients, Web Designers should possess a range of skills and
                    qualities.
                  </p>

                  <div className="flex items-center cursor-pointer">
                    <span>Learn More </span>
                    <FaArrowRight className="ml-2 text-[#2D57A2] " />
                  </div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide2">
              <div className="flex items-center justify-between ">
                <div className="topServicesLeft">
                  <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="/digital.json"
                    className="animation"
                  ></lottie-player>
                </div>

                <div className="topServiceRight">
                  <h2 className="text-4xl font-bold">
                  Digital Marketing Strategy​​
                  </h2>
                  <p className="my-3 leading-7">
                    {" "}
                    Web Designers are responsible for designing and building the
                    interface, navigation and aesthetic of websites for
                    businesses and clients. Likely working in the IT team of an
                    organisation or for a digital design agency that services
                    clients, Web Designers should possess a range of skills and
                    qualities.
                  </p>

                  <Link to='/services'>
                 <div className="flex items-center cursor-pointer">
                    <span>Learn More </span>
                    <FaArrowRight className="ml-2 text-[#2D57A2] " />
                  </div>
                 </Link>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
              <div className="flex items-center justify-between ">
                <div className="topServicesLeft">
                  <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="/digital2.json"
                    className="animation"
                  ></lottie-player>
                </div>

                <div className="topServiceRight">
                  <h2 className="text-4xl font-bold">
                  Social Media​​ Marketing
                  </h2>
                  <p className="my-3 leading-7">
                    {" "}
                    SoftyPy Digitla Marketing Agency classifies your business goals & executes competitor by follow social media strategy.
                  </p>
                  <Link to='/services'>
                 <div className="flex items-center cursor-pointer">
                    <span>Learn More </span>
                    <FaArrowRight className="ml-2 text-[#2D57A2] " />
                  </div>
                 </Link>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
              <div className="flex items-center justify-between ">
                <div className="topServicesLeft">
                  <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="/content.json"
                    className="animation"
                  ></lottie-player>
                </div>

                <div className="topServiceRight">
                  <h2 className="text-4xl font-bold">
                  Content Marketing​
                  </h2>
                  <p className="my-3 leading-7">
                    {" "}
                    SoftyPy is the best content marketing agency in the world. We have a professionals team for content marketing
                  </p>

                 <Link to='/services'>
                 <div className="flex items-center cursor-pointer">
                    <span>Learn More </span>
                    <FaArrowRight className="ml-2 text-[#2D57A2] " />
                  </div>
                 </Link>
                </div>
              </div>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <div className="arrowWrap">
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
    </>
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

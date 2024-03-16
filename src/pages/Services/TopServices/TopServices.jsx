/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./TopServices.css";
import { FaLocationArrow, FaArrowRight } from "react-icons/fa";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Container from "../../../ui/Container";
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
      <main className="topServicesWrap">
        <div>
          <div className="relatedServiceHead  mb-8">
            <h2 className="text-3xl md:text-5xl">Our Top Services</h2>
          </div>
        </div>
 mb-8
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 mb-8">
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
          <h2 className="text-4xl font-bold">Web Design & Development </h2>
          <p className="my-3 leading-7">
            Unlock the full potential of your online presence with our bespoke
            website design and development services. Our team of skilled
            designers and developers work collaboratively to create visually
            stunning, user-friendly websites that not only captivate your
            audience but also provide seamless navigation. From responsive
            design to e-commerce solutions, we ensure that your website is a
            true reflection of your brand and engages visitors effectively.
          </p>

          <div className="flex items-center cursor-pointer">
            <span>Learn More </span>
            <FaArrowRight className="ml-2 text-[#2D57A2] " />
          </div>
        </div>
        </div>
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          <div className="topServiceRight order-3 lg:order-1">
            <h2 className="text-4xl font-bold">App Development​​</h2>
            <p className="my-3 leading-7">
              Stay ahead of the curve with our innovative app development
              services. Whether you're looking to create a mobile application
              for iOS, Android, or cross-platform, we've got you covered. Our
              experienced team leverages the latest technologies to build
              intuitive and feature-rich apps that cater to your unique business
              requirements. From concept to deployment, we prioritize user
              experience and functionality to ensure your app stands out in the
              competitive digital landscape.
            </p>

            <Link to="/services">
              <div className="flex items-center cursor-pointer">
                <span>Learn More </span>
                <FaArrowRight className="ml-2 text-[#2D57A2] " />
              </div>
            </Link>
          </div>
          <div className="topServicesLeft order-2">
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
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-8">
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
            <h2 className="text-4xl font-bold">ERP Software Solution</h2>
            <p className="my-3 leading-7">
              Optimize your business processes with our robust ERP (Enterprise
              Resource Planning) software solutions. We understand the
              importance of efficiency and integration in today's fast-paced
              business environment. Our ERP solutions are tailored to streamline
              your operations, enhance collaboration, and provide real-time
              insights into your business data. Experience increased
              productivity and seamless workflow management with our customized
              ERP systems.
            </p>
            <Link to="/services">
              <div className="flex items-center cursor-pointer">
                <span>Learn More </span>
                <FaArrowRight className="ml-2 text-[#2D57A2] " />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        <div className="topServiceRight mt-10 order-3 lg:order-1">
        <h2 className="text-4xl font-bold">Digital Marketing​</h2>
        <p className="my-3 leading-7">
          Amplify your online presence and reach your target audience with our
          comprehensive digital marketing services. Our team of experts
          specializes in creating data-driven strategies across various
          channels, including social media, search engine optimization (SEO),
          content marketing, and more. Whether you're looking to boost brand
          awareness, drive traffic, or increase conversions, our digital
          marketing solutions are designed to deliver tangible and measurable
          results.
        </p>

        <Link to="/services">
          <div className="flex items-center cursor-pointer">
            <span>Learn More </span>
            <FaArrowRight className="ml-2 text-[#2D57A2] " />
          </div>
        </Link>
      </div>

      <div className="topServicesLeft order-2">
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
        </div>

       
      </main>
    </Container>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
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

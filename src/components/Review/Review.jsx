/* eslint-disable react/no-unescaped-entities */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import man from "../../../public/assets/kamal.jpg";
import man2 from "../../../public/assets/man2.webp";
import man3 from "../../../public/assets/man3.png";
import "./Review.css";
import { FaQuoteLeft , FaArrowRight} from "react-icons/fa";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import Container from "../../ui/Container";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function Review() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <Container>
     <div className="mb-8">
     <SectionTitle title='What Our Client Say '></SectionTitle>
     </div>
      <div className="reviewSliderWrap">
      <div ref={sliderRef} className="keen-slider keenSlider">
        <div className="keen-slider__slide number-slide1">
          <div className="swiperWrap">
            <div className="reviewImg">
              <img src={man} alt="" />
            </div>
            <div className="reviewContent">
              <h3 >
                Kamal Hossain{" "}
              </h3>
              <h6>
                Buildtech Architect & Engineers
              </h6>
              <blockquote className="flex mt-3">
                <FaQuoteLeft className="leftQoute" />
                <p className="text-xl">
                  SOFTYPY is providing a valuable service to businesses in
                  today's fast-paced and technology-driven world. The team's
                  expertise in digital marketing is helping companies reach
                  their target audience, increase brand awareness, drive traffic
                  to their website, and generate leads and sales.
                </p>
              </blockquote>
             <div className="flex flex-end items-center text-[#F81600] ml-8">
             <button>Read history </button>
             <FaArrowRight className="historyIcon"/>
             </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="swiperWrap">
            <div className="reviewImg">
              <img src={man2} alt="" />
            </div>
            <div className="reviewContent">
              <h3 className="text-4xl font-bold text-[#F81600] ">
                Kamal Hossain
              </h3>
              <h6 className="text-xl font-bold mt-2">
                Buildtech Architect & Engineers
              </h6>
              <blockquote className="flex mt-3">
                <FaQuoteLeft className="leftQoute" />
                <p className="text-xl">
                  SOFTYPY is providing a valuable service to businesses in
                  today is fast-paced and technology-driven world. The team 
                  expertise in digital marketing is helping companies reach
                  their target audience, increase brand awareness, drive traffic
                  to their website, and generate leads and sales.
                </p>
              </blockquote>
              <div className="flex flex-end items-center text-[#F81600] ml-8">
             <button>Read history </button>
             <FaArrowRight className="historyIcon"/>
             </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="swiperWrap">
            <div className="reviewImg">
              <img src={man3} alt="" />
            </div>
            <div className="reviewContent">
              <h3 className="text-4xl font-bold text-[#F81600] ">
                Kamal Hossain{" "}
              </h3>
              <h6 className="text-xl font-bold mt-2">
                Buildtech Architect & Engineers
              </h6>
              <blockquote className="flex mt-3">
                <FaQuoteLeft className="leftQoute" />
                <p className="text-xl">
                  SOFTYPY is providing a valuable service to businesses in
                  today's fast-paced and technology-driven world. The team's
                  expertise in digital marketing is helping companies reach
                  their target audience, increase brand awareness, drive traffic
                  to their website, and generate leads and sales.
                </p>
              </blockquote>
              <div className="flex flex-end items-center text-[#F81600] ml-8">
             <button>Read history </button>
             <FaArrowRight className="historyIcon"/>
             </div>
            </div>
          </div>
        </div>

      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide1">
            <div className="reviewThum">
                <img src={man} alt="man" />
            </div>
        </div>
        <div className="keen-slider__slide number-slide1">
            <div className="reviewThum">
                <img src={man2} alt="man" />
            </div>
        </div>
        <div className="keen-slider__slide number-slide1">
            <div className="reviewThum">
                <img src={man3} alt="man" />
            </div>
        </div>
      </div>
      </div>
    </Container>
  );
}

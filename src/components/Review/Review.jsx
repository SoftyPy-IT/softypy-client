/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Review.css";
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import Container from "../../ui/Container";
import { useGetAllReviewsQuery } from "../../redux/features/review/reviewApi";

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
  const { data: reviews, isLoading, isError } = useGetAllReviewsQuery();

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

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (isError) {
    return <p>Something went to wrong </p>;
  }

  return (
    <div className="sectionMargin">
      <Container>
        <div className="mb-20">
          <SectionTitle title="What Our Client Say "></SectionTitle>
        </div>
        <div className="reviewSliderWrap ">
          <div ref={sliderRef} className="keen-slider keenSlider">
            <div className="keen-slider__slide number-slide1">
              <div className="swiperWrap">
                <div className={`${reviews[0]?.image ? "reviewImg" : ""}`}>
                  {reviews[0]?.image ? (
                    <img src={reviews[0]?.image} alt="" />
                  ) : (
                    <iframe
                     className='videoWidth'
                      src={reviews[0]?.videoUrl}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
                <div className="reviewContent">
                  <h3>{reviews[0]?.name}</h3>
                  <h6>{reviews[0]?.title}</h6>
                  <blockquote className="flex mt-3">
                    <FaQuoteLeft className="leftQoute" />
                    <p className="text-xl">{reviews[0]?.description}</p>
                  </blockquote>
                  <div className="flex flex-end items-center text-[#F81600] ml-8">
                    <button>See More </button>
                    <FaArrowRight className="historyIcon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide1">
              <div className="swiperWrap">
                <div className={`${reviews[1]?.image ? "reviewImg" : ""}`}>
                  {reviews[1]?.image ? (
                    <img src={reviews[1]?.image} alt="" />
                  ) : (
                    <iframe
                    className='videoWidth'
                      src={reviews[0]?.videoUrl}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
                <div className="reviewContent">
                  <h3 className="text-4xl font-bold text-[#F81600] ">
                    {reviews[1]?.name}
                  </h3>
                  <h6 className="text-xl font-bold mt-2">
                    {reviews[1]?.title}
                  </h6>
                  <blockquote className="flex mt-3">
                    <FaQuoteLeft className="leftQoute" />
                    <p className="text-xl">{reviews[1]?.description}</p>
                  </blockquote>
                  <div className="flex flex-end items-center text-[#F81600] ml-8">
                    <button>Read history </button>
                    <FaArrowRight className="historyIcon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide1">
              <div className="swiperWrap">
                <div className={`${reviews[2]?.image ? "reviewImg" : ""}`}>
                  {reviews[2]?.image ? (
                    <img src={reviews[2]?.image} alt="" />
                  ) : (
                    <iframe
                    className='videoWidth'
                      src={reviews[2]?.videoUrl}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
                <div className="reviewContent">
                  <h3 className="text-4xl font-bold text-[#F81600] ">
                    {reviews[2]?.name}
                  </h3>
                  <h6 className="text-xl font-bold mt-2">
                    {reviews[2]?.title}
                  </h6>
                  <blockquote className="flex mt-3">
                    <FaQuoteLeft className="leftQoute" />
                    <p className="text-xl">{reviews[2]?.description}</p>
                  </blockquote>
                  <div className="flex flex-end items-center text-[#F81600] ml-8">
                    <button>Read history </button>
                    <FaArrowRight className="historyIcon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={thumbnailRef} className="keen-slider thumbnail">
            <div className="keen-slider__slide number-slide1">
              <div className="reviewThum">
                {reviews[0]?.videoUrl ? (
                  <img
                    src={`https://img.youtube.com/vi/${getYoutubeVideoId(
                      reviews[0]?.videoUrl
                    )}/0.jpg`}
                    alt="man"
                  />
                ) : (
                  <img src={reviews[0]?.image} />
                )}
              </div>
            </div>
            <div className="keen-slider__slide number-slide1">
              <div className="reviewThum">
                {reviews[1]?.videoUrl ? (
                  <img
                    src={`https://img.youtube.com/vi/${getYoutubeVideoId(
                      reviews[1]?.videoUrl
                    )}/0.jpg`}
                    alt="man"
                  />
                ) : (
                  <img src={reviews[1]?.image} />
                )}
              </div>
            </div>
            <div className="keen-slider__slide number-slide1">
              <div className="reviewThum">
                {reviews[2]?.videoUrl ? (
                  <img
                    src={`https://img.youtube.com/vi/${getYoutubeVideoId(
                      reviews[2]?.videoUrl
                    )}/0.jpg`}
                    alt="man"
                  />
                ) : (
                  <img src={reviews[2]?.image} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function getYoutubeVideoId(url) {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url?.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  } else {
    // Handle invalid URL or ID not found
    return "Invalid YouTube URL or ID";
  }
}

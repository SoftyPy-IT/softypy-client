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
import { Link } from "react-router-dom";

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
    return <p>Something went wrong </p>;
  }

  return (
    <div className="sectionMargin">
      <Container>
        <div className="mb-8 md:mb-20">
          <SectionTitle title="What Our Client Say "></SectionTitle>
        </div>
        <div className="reviewSliderWrap ">
          <div ref={sliderRef} className="keen-slider keenSlider">
            {reviews.map((review, index) => (
              <div key={index} className="keen-slider__slide number-slide1">
                <div className="swiperWrap">
                  <div className={`${review?.image ? "reviewImg" : ""}`}>
                    {review?.image ? (
                      <img src={review?.image} alt="" />
                    ) : (
                      <iframe
                        className="videoWidth"
                        src={review?.videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                  <div className="reviewContent mt-3">
                    <h3 className="text-sm md:text-xl lg:text-3xl text-[#2D57A2] font-semibold ">{review?.name}</h3>
                    <span className=" text-[12px] md:text-sm text-semibold ">{review?.title}</span>
                    <blockquote className="flex mt-3">
                      <FaQuoteLeft className="leftQoute" />
                      <p className="text-xl">
                        {review?.description.slice(0, 200)}....
                      </p>
                    </blockquote>
                    <Link to="/client">
                      <div className="flex flex-end items-center text-[#2D57A2] ml-8">
                        <button>See More </button>
                        <FaArrowRight className="historyIcon" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={thumbnailRef} className="keen-slider thumbnail">
            {reviews.map((review, index) => (
              <div key={index} className="keen-slider__slide number-slide1">
                <div className="reviewThum">
                  <img src={review?.image} alt="thumbnail" />
                  {review?.videoUrl ? (
                    <img
                      src={`https://img.youtube.com/vi/${getYoutubeVideoId(
                        review?.videoUrl
                      )}/0.jpg`}
                      alt="thumbnail"
                    />
                  ) : (
                    <img src={review?.image} alt="thumbnail" />
                  )}
                </div>
              </div>
            ))}
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

/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import Container from "../../ui/Container";
import { useGetAllReviewsQuery } from "../../redux/features/review/reviewApi";
import NavBar from "../Shared/NavBar/NavBar";
import Brand from "../../components/Brand/Brand";

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
    <div>
    <div className="shadow-lg">
      <NavBar/>
    </div>
      <Container>
        <div className="mb-8 md:mb-20 pt-20">
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
                      className="videoWidth"
                      src={reviews[0]?.videoUrl}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
                <div className="reviewContent mt-3">
                  <h3 className="text-sm md:text-xl lg:text-3xl text-[#2D57A2] font-semibold ">
                    {reviews[0]?.name}
                  </h3>
                  <span className=" text-[12px] md:text-sm text-semibold ">
                    {reviews[0]?.title}
                  </span>
                  <blockquote className="flex mt-3">
                    <FaQuoteLeft className="leftQoute" />
                    <p className="text-xl">
                      {reviews[0]?.description.slice(0, 200)}
                    </p>
                  </blockquote>
                 
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
                      className="videoWidth"
                      src={reviews[0]?.videoUrl}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
                <div className="reviewContent">
                  <h3 className="text-sm md:text-xl lg:text-3xl text-[#2D57A2] font-semibold ">
                    {reviews[1]?.name}
                  </h3>
                  <span className="mt-2 md:text-sm text-[12px]  font-semibold">
                    {reviews[1]?.title}
                  </span>
                  <blockquote className="flex mt-3">
                    <FaQuoteLeft className="leftQoute" />
                    <p className="text-xl">
                      {reviews[1]?.description.slice(0, 250)}
                    </p>
                  </blockquote>
                 
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
                      className="videoWidth"
                      src={reviews[2]?.videoUrl}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
                <div className="reviewContent">
                  <h3 className="text-sm md:text-xl lg:text-3xl text-[#2D57A2] font-semibold ">
                    {reviews[2]?.name}
                  </h3>
                  <span className="mt-2 md:text-sm text-[12px] font-semibold">
                    {reviews[2]?.title}
                  </span>
                  <blockquote className="flex mt-3">
                    <FaQuoteLeft className="leftQoute" />
                    <p className="text-xl">
                      {reviews[2]?.description.slice(0, 250)}
                    </p>
                  </blockquote>
                  
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide1">
              <div className="swiperWrap">
                <div className={`${reviews[3]?.image ? "reviewImg" : ""}`}>
                  {reviews[3]?.image ? (
                    <img src={reviews[3]?.image} alt="" />
                  ) : (
                    <iframe
                      className="videoWidth"
                      src={reviews[3]?.videoUrl}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
                <div className="reviewContent">
                  <h3 className="text-sm md:text-xl lg:text-3xl text-[#2D57A2] font-semibold ">
                    {reviews[3]?.name}
                  </h3>
                  <span className="mt-2 font-semibold">
                    {reviews[3]?.title}
                  </span>
                  <blockquote className="flex mt-3">
                    <FaQuoteLeft className="leftQoute" />
                    <p className="text-xl">
                      {reviews[3]?.description.slice(0, 250)}
                    </p>
                  </blockquote>
                  
                </div>
              </div>
            </div>
          </div>

          <div ref={thumbnailRef} className="keen-slider thumbnail">
            <div className="keen-slider__slide number-slide1">
              <div className="reviewThum">
                <img src={reviews[0]?.image} />
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
                <img src={reviews[1]?.image} />
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
                <img src={reviews[2]?.image} />
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
            <div className="keen-slider__slide number-slide1">
              {reviews[3]?.image ? (
                <div className="reviewThum">
                  <img src={reviews[3]?.image} />

                  {reviews[3]?.videoUrl ? (
                    <img
                      src={`https://img.youtube.com/vi/${getYoutubeVideoId(
                        reviews[3]?.videoUrl
                      )}/0.jpg`}
                      alt="man"
                    />
                  ) : (
                    <img src={reviews[3]?.image} />
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Container>
      <Brand/>
    </div>
  );
}

function getYoutubeVideoId(url) {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url?.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  } else {
    // Handle invalid URL or ID not found
    return "Invalid YouTube URL or ID";
  }
}

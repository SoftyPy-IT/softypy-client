import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import SwiperTimeLine from "../../components/TimeLine/SwiperTimeLine";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Services from "./Services/Services";
import Choos2 from "./ChoosUs/Choose2";
import TimeLine from "./TimeLine/TimeLine";
import CountDown from "./CountDown/CountDown";
import HeroSection from "../../components/Banner/HeroSection/HeroSection";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <WhoWeAre />
      <SwiperTimeLine />
      <TimeLine />
      <Choos2 />
      <Services />
      <Brand />
      <Review />
      <CountDown />
      <Subscribe />
    </div>
  );
};

export default Home;

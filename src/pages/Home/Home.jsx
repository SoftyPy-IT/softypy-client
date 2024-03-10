import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import SwiperTimeLine from "../../components/TimeLine/SwiperTimeLine";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Services from "./Services/Services";
import Technologies from "./ChoosUs/Technologies";
import TimeLine from "./TimeLine/TimeLine";
import CountDown from "./CountDown/CountDown";
import HeroSection from "../../components/Banner/HeroSection/HeroSection";
import Subscribe from "../../components/Subscribe/Subscribe";
import Accordion from "./Practice";
import Accordion3 from "./Practice2";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Accordion />
      <Accordion3 />
      <WhoWeAre />

      <Services />
      <SwiperTimeLine />
      <TimeLine />
      <Technologies />
      <Brand />
      <CountDown />
      <Review />
      <Subscribe />
    </div>
  );
};

export default Home;

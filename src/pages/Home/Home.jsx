import HeroSection from "../../components/Banner/HeroSection/HeroSection";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import Subscribe from "../../components/Subscribe/Subscribe";
import SwiperTimeLine from "../../components/TimeLine/SwiperTimeLine";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Technologies from "./ChoosUs/Technologies";
import CountDown from "./CountDown/CountDown";
import Services from "./Services/Services";
import TimeLine from "./TimeLine/TimeLine";


const Home = () => {
  return (
    <div className="home">
      <HeroSection />
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

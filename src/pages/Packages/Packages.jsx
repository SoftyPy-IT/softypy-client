import TimeLine from "../Home/TimeLine/TimeLine";
import NavBar from "../Shared/NavBar/NavBar";
import Technologies from "../Home/ChoosUs/Technologies";
import Review from "../../components/Review/Review";
import Brand from "../../components/Brand/Brand";
import WorkPortfolio from "../../components/WorkPortfolio/WorkPortfolio";
const Packages = () => {
  return (
    <div>
      <div className=" portfolioHeroSection">
        <div className="navsBarWrap">
          <NavBar />
          <div className=" portfolioContent">
            <h3 className="text-3xl md:text-5xl font-bold mb-2">
              Best Website Development Packages.
            </h3>
          </div>
        </div>
      </div>

      <Review/>
      <Brand/>
      <TimeLine />
      <Technologies/>
      <WorkPortfolio/>
    </div>
  );
};

export default Packages;

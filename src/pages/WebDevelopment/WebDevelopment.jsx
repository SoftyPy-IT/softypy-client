/* eslint-disable react/no-unescaped-entities */
import NavBar from "../Shared/NavBar/NavBar";
import HowSoftyPyWork from "../Packages/HowSoftyPyWork";
import Brand from "../../components/Brand/Brand";
import WorkPortfolio from "../../components/WorkPortfolio/WorkPortfolio";
import Technologies from "../Home/ChoosUs/Technologies";
import Ready from "../Packages/Ready";
import DigitalExcellence from "../../components/DigitalExcellence/DigitalExcellence";
import MernPackage from "../Packages/MernPackage";
import WhyChoseOurPackage from "../Packages/WhyChoseOurPackage";
import WantToTalk from "../Packages/WantToTalk";

const WebDevelopment = () => {
  return (
    <div>
      <div className="shadow-lg">
        <NavBar />
      </div>
      <DigitalExcellence />

      <MernPackage />
      <HowSoftyPyWork />
      <WhyChoseOurPackage />

  
      <Brand />

      <Technologies />
      <WorkPortfolio />
      <WantToTalk />
      <Ready />
    </div>
  );
};

export default WebDevelopment;

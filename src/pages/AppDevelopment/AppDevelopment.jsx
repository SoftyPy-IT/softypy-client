import { Link } from "react-router-dom";
import app from "../../../public/assets/app.png";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import AppCategories from "./AppCategories";
import "./AppDevelopment.css";
import AppPortFolio from "./AppPortFolio";

const AppDevelopment = () => {
  return (
    <div>
      <div className="shadow-lg">
        <NavBar />
      </div>
      <div className="sectionMargin">
        <Container>
          <div className="flex flex-col xl:flex-row gap-5 items-center justify-between">
            <div className="w-[100%]  lg:max-w-[50%] max-auto xl:order-3  order-4">
              <h2 className="text-3xl font-bold xl:text-7xl"> Android app</h2>
              <h2 className="text-3xl font-bold xl:text-7xl">development</h2>
              <h2 className="text-3xl font-bold xl:text-7xl"> services </h2>
              <p className="my-5 text-xl">
                Android apps that help businesses take their next big step
                forward and rise quickly to Google Play’s top charts.
              </p>
              <Link to="/contact">
                <button className="bg-[#40C7F4] text-white w-[200px] h-[45px]">
                  Discuss Us{" "}
                </button>
              </Link>
            </div>
            <div className='order-3 mb-5 lg:mb-0'>
            
            
            <img src={app} alt="apps" />
            </div>
          </div>
          <AppCategories />
        </Container>
        {/* <AppPortFolio /> */}
        <Brand />
        <Review />
      </div>
    </div>
  );
};

export default AppDevelopment;

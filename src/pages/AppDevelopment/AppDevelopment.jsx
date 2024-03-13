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
      <div className="bg-[#680C70] text-white ">
        <NavBar />
      </div>
      <div className="sectionMargin">
        <Container>
          <div className="flex-wrap block xl:justify-between xl:items-center lg:flex ">
            <div className="w-[100%]  lg:max-w-[40%] max-auto  order-3 lg:order-1">
              <h2 className="text-3xl font-bold lg:text-7xl"> Android app</h2>
              <h2 className="text-3xl font-bold lg:text-7xl">development</h2>
              <h2 className="text-3xl font-bold lg:text-7xl"> services </h2>
              <p className="my-5 text-xl">
                Android apps that help businesses take their next big step
                forward and rise quickly to Google Play’s top charts.
              </p>
              <Link to="/contact">
                <button className="bg-[#680C70] text-white w-[200px] h-[45px]">
                  Discuss Us{" "}
                </button>
              </Link>
            </div>
            <img className='order-2' src={app} alt="apps" />
          </div>
          <AppCategories />
        </Container>
        <AppPortFolio />
        <Brand />
        <Review />
      </div>
    </div>
  );
};

export default AppDevelopment;

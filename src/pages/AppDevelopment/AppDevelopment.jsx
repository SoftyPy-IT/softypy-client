import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import app from "../../../public/assets/app.png";
import "./AppDevelopment.css";
import AppCategories from "./AppCategories";
import AppPortFolio from "./AppPortFolio";
import Review from "../../components/Review/Review";
import Brand from "../../components/Brand/Brand";

const AppDevelopment = () => {
  return (
    <div>
      <div className="bg-[#680C70] text-white ">
        <NavBar />
      </div>
      <div className="sectionMargin">
        <Container>
          <div className="flex items-center justify-between ">
            <div className="max-w-[40%] max-auto ">
              <h2 className="text-7xl font-bold"> Android app</h2>
              <h2 className="text-7xl font-bold">development</h2>
              <h2 className="text-7xl font-bold"> services </h2>
              <p className="text-xl my-5">
                Android apps that help businesses take their next big step
                forward and rise quickly to Google Play’s top charts.
              </p>
              <button className="bg-[#680C70] text-white w-[200px] h-[45px]">
                Discuss Us{" "}
              </button>
            </div>
            <img src={app} alt="" />
          </div>
          <AppCategories />
        </Container>
        <AppPortFolio />
        <Brand/>
        <Review />
      </div>
    </div>
  );
};

export default AppDevelopment;

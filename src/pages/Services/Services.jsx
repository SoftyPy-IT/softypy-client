/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./Services.css";
import responsive from "../../../public/assets/dev.png";
import TopServices from "./TopServices/TopServices";
import BoostSection from "../../components/BostSection/BoostSection";
import NavBar from "../Shared/NavBar/NavBar";
import Container from "../../ui/Container";
import CommonButton from "../Shared/CommonButton/CommonButton";
import { Link } from "react-router-dom";
const Services = () => {
  // const ref = useRef(null);
  // useEffect(() => {
  //   import("@lottiefiles/lottie-player");
  // });

  const cardData = [
    {
      id: 1,
      name: "Ecommerce Website ",
    },
    {
      id: 1,
      name: "Ecommerce Website ",
    },
    {
      id: 1,
      name: "Ecommerce Website ",
    },
    {
      id: 1,
      name: "Ecommerce Website ",
    },
  ];



  return (
    <div className="home">
    <div className="navsBarWrap">
    <div className="shadow-lg ">
      <NavBar />
    </div>


  </div>

 

      <Container>
        <div className="services sectionMargin ">
          <div className="servicesLeftSide">
            <h3>
              Premium Website Development Service Empowering Business Growth
              With Professionalism & Expertise
            </h3>
            <p className="my-5">
            We take pride in offering a comprehensive suite of cutting-edge services tailored to elevate your digital presence and streamline your business operations. Our commitment is to deliver solutions that not only meet but exceed your expectations.

            </p>
           <Link to='/contact'> <CommonButton text='Get More ' /></Link>
          </div>
          <div className="srvicesRightSide">
            <img src={responsive} alt="device" />
          </div>
        </div>
        <div className="sectionMargin">
          <TopServices />
        </div>
      
        

      </Container>
      <BoostSection />
    </div>
  );
};

export default Services;

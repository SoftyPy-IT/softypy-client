import { FaArrowRight } from "react-icons/fa";
import "./Product.css";
import { FaLaptopCode } from "react-icons/fa";
import Container from "../../ui/Container";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { FaMobileScreen } from "react-icons/fa6";
import { Link } from "react-router-dom";
const MorePackages = () => {
  return (
    <Container>
      <div className="sectionMargin">
        <SectionTitle title="Choose Your Packages" />
      </div>
      <div className="mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
          <div className="productCard packageCard">
            <div className="moreServiceIconWrap">
              <FaMobileScreen className="moreServiceIcon" />
            </div>
            <div className="productCardContent">
              <h3 className="text-xl font-bold uppercase">APPS Development </h3>
             
              <Link to="/website">
              <div className="flex items-center cursor-pointer mt-2">
                <span>Request Now </span>
                <FaArrowRight className="ml-2  text-white" />
              </div>
            </Link>
            </div>
          </div>
          <div className="productCard packageCard">
            <div className="moreServiceIconWrap">
              <FaLaptopCode className="moreServiceIcon" />
            </div>
            <div className="productCardContent">
              <h3 className="text-xl font-bold uppercase">
                Website Development
              </h3>
             
              <Link to="/website">
                <div className="flex items-center cursor-pointer mt-2">
                  <span>Request Now </span>
                  <FaArrowRight className="ml-2  text-white" />
                </div>
              </Link>
            </div>
          </div>
          <div className="productCard packageCard">
            <div className="moreServiceIconWrap">
              <HiOutlineLightBulb className="moreServiceIcon" />
            </div>
            <div className="productCardContent">
              <h3 className="text-xl font-bold uppercase">ERP Solution</h3>
            
              <Link to="/website">
              <div className="flex items-center cursor-pointer mt-2">
                <span>Request Now </span>
                <FaArrowRight className="ml-2  text-white" />
              </div>
            </Link>
            </div>
          </div>
          <div className="productCard packageCard">
            <div className="moreServiceIconWrap">
              <TfiWorld className="moreServiceIcon" />
            </div>
            <div className="productCardContent">
              <h3 className="text-xl font-bold uppercase">Digital Marketing</h3>
            
              <Link to="/website">
              <div className="flex items-center cursor-pointer mt-2">
                <span>Request Now </span>
                <FaArrowRight className="ml-2  text-white" />
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MorePackages;

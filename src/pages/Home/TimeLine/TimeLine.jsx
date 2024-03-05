/* eslint-disable react/no-unescaped-entities */
import "./TimeLine.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../../ui/Container";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import {
  FaHeadset,
  FaLaptopCode,
  FaRecycle,
  FaStreetView,
} from "react-icons/fa";

AOS.init();

const TimeLine = () => {
  return (
    <div className="sectionMargin mb-[140px] block">
      <SectionTitle
        title="How We Work"
        text="Our team craft to seamlessly blend innovation, collaboration, and excellence. We are dedicated to delivering tailored software solutions that not only meet but exceed our clients' expectations. Here's a glimpse into our unique workflow:
"
      ></SectionTitle>

      <Container>
        <div className="relative">
          <div className="borderRound2">
            <h3 className="grid place-items-center mt-12 circleMove">
              <FaRecycle size={90} />
            </h3>
          </div>
          <div className="borderRound">
            <div className="workFlowBoxWraps ">
              <div className="workFlowBox">
                <div className="workFlowIcon">
                  <HiOutlineLightBulb size={70} />
                </div>
                <div>
                  <b className="text-[#680C70]">Requirement Analysis</b>
                </div>
              </div>
              <div className="workFlowBox workFlowBox2">
                <div className="workFlowIcon">
                  <FaPeopleGroup size={70} />
                </div>
                <div>
                  <b className="text-[#680C70]">Design and Planning</b>
                </div>
              </div>
              <div className="workFlowBox workFlowBox3">
                <div className="workFlowIcon">
                  <FaLaptopCode size={70} />
                </div>
                <div>
                  <b className="text-[#680C70]"> Development Iterations</b>
                </div>
              </div>
              <div className="workFlowBox workFlowBox4">
                <div className="workFlowIcon">
                  <FaStreetView size={70} />
                </div>
                <div>
                  <b className="text-[#680C70]">
                    {" "}
                    Quality Assurance and Testing
                  </b>
                </div>
              </div>
              <div className="workFlowBox workFlowBox5">
                <div className="workFlowIcon">
                  <HiOutlineLightBulb size={70} />
                </div>
                <div>
                  <b className="text-[#680C70]">
                    Deployment and Client Approval
                  </b>
                </div>
              </div>
              <div className="workFlowBox workFlowBox6">
                <div className="workFlowIcon">
                  <FaHeadset size={70} />
                </div>
                <div>
                  <b className="text-[#680C70]">
                    Post-Launch Support and Maintenance
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TimeLine;

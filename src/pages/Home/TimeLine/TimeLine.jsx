/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { easeInOut, motion } from "framer-motion";
import {
  FaHeadset,
  FaLaptopCode,
  FaRecycle,
  FaStreetView,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import Container from "../../../ui/Container";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "./TimeLine.css";

AOS.init();

const TimeLine = () => {
  const galleryAnimation = {
    hidden: {
      scale: 0,
      opacity: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 2,
      },
    },
    hover: {
      // scale: 2,
      // z: 9999,
      transition: {
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="sectionMargin mb-[260px] block workFlowWrapHide">
      <div className="mb-14">
        <SectionTitle
          title="How We Work"
          text="Our team craft to seamlessly blend innovation, collaboration, and excellence. We are dedicated to delivering tailored software solutions that not only meet but exceed our clients' expectations. Here's a glimpse into our unique workflow:
"
        ></SectionTitle>
      </div>

      <Container>
        <div className="relative ">
          <div className="borderRound2">
            <h3 className="grid mt-12 place-items-center circleMove">
              <FaRecycle size={90} />
            </h3>
          </div>
          <div className="borderRound">
            <div className="workFlowBoxWraps ">
              <motion.div
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="workFlowBox"
              >
                <div className="workFlowIcon">
                  <HiOutlineLightBulb size={70} />
                </div>
                <div>
                  <b className="text-[#1586FD]">Requirement Analysis</b>
                </div>
              </motion.div>
              <motion.div
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="workFlowBox workFlowBox2"
              >
                <div className="workFlowIcon">
                  <FaPeopleGroup size={70} className="text"/>
                </div>
                <div>
                  <b className="text-[#1586FD]">Design and Planning</b>
                </div>
              </motion.div>
              <motion.div
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="workFlowBox workFlowBox3"
              >
                <div className="workFlowIcon">
                  <FaLaptopCode size={70} />
                </div>
                <div>
                  <b className="text-[#1586FD]"> Development Iterations</b>
                </div>
              </motion.div>
              <motion.div
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="workFlowBox workFlowBox4"
              >
                <div className="workFlowIcon">
                  <FaStreetView size={70} />
                </div>
                <div>
                  <b className="text-[#1586FD]">
                    {" "}
                    Quality Assurance and Testing
                  </b>
                </div>
              </motion.div>
              <motion.div
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="workFlowBox workFlowBox5"
              >
                <div className="workFlowIcon">
                  <HiOutlineLightBulb size={70} />
                </div>
                <div>
                  <b className="text-[#1586FD]">
                    Deployment and Client Approval
                  </b>
                </div>
              </motion.div>
              <motion.div
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="workFlowBox workFlowBox6"
              >
                <div className="workFlowIcon">
                  <FaHeadset size={70} />
                </div>
                <div>
                  <b className="text-[#1586FD]">
                    Post-Launch Support and Maintenance
                  </b>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TimeLine;

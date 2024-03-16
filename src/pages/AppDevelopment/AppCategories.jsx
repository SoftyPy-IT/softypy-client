import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  FaCarSide,
  FaCommentDots,
  FaGraduationCap,
  FaVideo,
} from "react-icons/fa";
import {
  FaCircleDollarToSlot,
  FaHeartCircleBolt,
  FaOilWell,
  FaVideoSlash,
} from "react-icons/fa6";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import "./AppDevelopment.css";

const AppCategories = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="sectionMargin">
      <h2 className="text-5xl font-bold text-black ">
        Enterprise and consumer-oriented Android apps for any industry
      </h2>
      <p className="my-5 text-xl max-w-[70%]">
        {" "}
        We develop Android apps tailored to your specific needs. Whether you
        want better business processes, insights into customer data or millions
        of downloads on Google Play, we cover it all, making sure your app
        performs seamlessly across the Android ecosystem and delivers
        outstanding user experience.
      </p>

      <div className="flex justify-between flex-wrap">
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{}}>
                <div className="flex items-center">
                  <FaVideo className="appIcon text-[#40C7F4]" size={35} />
                  <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                    {" "}
                    Enterprise
                  </h3>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Improve resource planning, track employee productivity, monitor
                equipment performance and address other business challenges with
                future-proof Android apps that integrate easily into the
                enterprise IT ecosystem.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="mt-3">
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{}}>
                  <div className="flex items-center">
                    <HiOutlineShoppingCart
                      className="appIcon text-[#40C7F4]"
                      size={35}
                    />
                    <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                      {" "}
                      E-commerce{" "}
                    </h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Streamline operations and offer next-level shopping experience
                  with apps that make it super easy to find products, complete
                  orders, and handle in-app purchases, or even bring AR, VR or
                  IoT-powered in-store experience
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-3">
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{}}>
                  <div className="flex items-center">
                    <HiOutlineUserGroup
                      className="appIcon text-[#40C7F4]"
                      size={35}
                    />
                    <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                      {" "}
                      social Media{" "}
                    </h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Whether it is a social networking and media sharing, blogging
                  and publishing or interest-based and sharing economy network,
                  we’ve made them all, integrating AI, AR/VR or other emerging
                  tech, too.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-3">
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{}}>
                  <div className="flex items-center">
                    <FaCommentDots
                      className="appIcon text-[#40C7F4]"
                      size={35}
                    />
                    <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                      {" "}
                      Real-Time Communication{" "}
                    </h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Enjoy flawless remote collaboration and data sharing with
                  real-time video, voice, and text messaging apps that allow
                  group chats, group calls, broadcasting, screen sharing and
                  more.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-3">
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{}}>
                  <div className="flex items-center">
                    <FaCircleDollarToSlot
                      className="appIcon text-[#40C7F4]"
                      size={35}
                    />
                    <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                      {" "}
                      Finance
                    </h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Get your enterprise or personal finance app with on-point
                  security and thought-out user experience for budget planning,
                  mobile wallet payments, customer loyalty programs, money
                  transfer or cryptocurrency portfolio management.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{}}>
                <div className="flex items-center">
                  <FaVideoSlash className="appIcon text-[#40C7F4]" size={35} />
                  <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                    {" "}
                    Entertainment
                  </h3>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Engage and entertain users with games, sports, music, and other
                entertainment content via feature-rich, customizable, and
                pleasant-to-use Android applications
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="mt-3">
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{}}>
                  <div className="flex items-center">
                    <FaHeartCircleBolt
                      className="appIcon text-[#40C7F4]"
                      size={35}
                    />
                    <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                      {" "}
                      Healthcare
                    </h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Transform the way healthcare is provided with diagnostic
                  assistance, remote patient monitoring, appointment management,
                  clinical assistance, telehealth, medical education and other
                  healthcare apps for medical staff and patients.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-3">
            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{}}>
                  <div className="flex items-center">
                    <FaGraduationCap
                      className="appIcon text-[#40C7F4]"
                      size={35}
                    />
                    <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                      {" "}
                      Education
                    </h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Redefine education with m-learning apps that provide
                  comprehensive and personalized learning experience, enhance
                  student interaction, allow convenient access to learning
                  materials (including via AR/VR) and simplify student progress
                  tracking.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-3">
            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{}}>
                  <div className="flex items-center">
                    <FaCarSide className="appIcon text-[#40C7F4]" size={35} />
                    <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                      {" "}
                      Logistics & Transportation
                    </h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Improve supply chain management with scalable and customizable
                  Android solutions that reduce paperwork, allow real-time order
                  tracking, ensure timely deliveries, and lower inventory and
                  fleet maintenance costs
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-3">
            <Accordion
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{}}>
                  <div className="flex items-center">
                    <FaOilWell className="appIcon text-[#40C7F4]" size={35} />
                    <h3 className="text-3xl font-bold ml-3 text-[#40C7F4]">
                      Wellness
                    </h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Promote health and fitness with activity tracking, nutrition
                  planning, weight loss coaching, sleep cycle analysis and
                  stress management via a wellness app. The apps we build
                  leverage AI, AR/VR and other new tech, and connect with
                  wearables.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    <Link to='/contact'>
    <button className="bg-[#40C7F4] mt-10 text-white w-[200px] h-[45px] flex items-center justify-center">
    <span>Contact Us</span> <HiOutlineArrowNarrowRight className="ml-2" />
  </button>
    </Link>
    </div>
  );
};

export default AppCategories;

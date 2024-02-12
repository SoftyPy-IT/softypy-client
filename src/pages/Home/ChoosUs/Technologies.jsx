/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Choos.css";
import { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import java from '../../../../public/assets/java.webp';
import javaScript from '../../../../public/assets/javaScript.png';
import pyton from '../../../../public/assets/pyton.png';
import c from '../../../../public/assets/c.png';
import cc from '../../../../public/assets/cc.png';
import rube from '../../../../public/assets/ruby.webp';
import swift from '../../../../public/assets/swift.png';
import dart from '../../../../public/assets/dart.webp';
import html from '../../../../public/assets/html.png';
import css from '../../../../public/assets/css.png';
import fortran from '../../../../public/assets/fortran.png';
import ts from '../../../../public/assets/ts.png';
import sql from '../../../../public/assets/sql.png';
import haskel from '../../../../public/assets/haskel.png';
import rust from '../../../../public/assets/rust.png';
import php from '../../../../public/assets/php.png';
import oracle from '../../../../public/assets/oracle.png';
import mysql from '../../../../public/assets/mysql.png';
import mongo from '../../../../public/assets/mongo.png';
import postgresql from '../../../../public/assets/post.png';
import redis from '../../../../public/assets/redis.png';
import maria from '../../../../public/assets/maria.png';
import ibm from '../../../../public/assets/ibm.png';
import lite from '../../../../public/assets/sql.png';
import react from '../../../../public/assets/react.png';
import next from '../../../../public/assets/next.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegCheckCircle } from "react-icons/fa";
import Container from "../../../ui/Container";
AOS.init();

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <Container>
   <div className="technologyWraps py-3">
   <div>
    <h3 className="technologyTitle">Technologies</h3>
   </div>
    <Box className='boxWrap' sx={{ bgcolor: "background.paper", }}>
      <Tabs
        orientation="vertical"
        variant=""
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      
        className="tabs"
      >          <Tab label="Programming" {...a11yProps(0)} />
        <Tab label="DATABASE" {...a11yProps(1)} />
        <Tab label="REPORTING" {...a11yProps(2)} />
        <Tab label="PROJECT MANAGEMENT" {...a11yProps(3)} />
        <Tab label="TESTING" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <div className='technologyWrap'>
          <h3 className="text-xl md:text-3xl font-bold ">Using Programming Languase </h3>
       <div className="flex items-center">
       <Marquee pauseOnHover={true}>
       <div className='skill skills'>
            <img src={react} alt="html"  className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={next} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={java} alt="html"  className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={javaScript} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={pyton} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={c} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={cc} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={sql} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={rube} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={swift} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={dart} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={html} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={fortran} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={ts} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={haskel} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={css} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={rust} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={php} alt="html" className='skillAnimation' />
          </div>
        </Marquee>
       </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='technologyWrap'>
          <h3 className="text-xl md:text-3xl font-bold "> Using Database </h3>
       <div className="flex items-center">
       <Marquee pauseOnHover={true}>
          <div className='skill skills'>
            <img src={oracle} alt="html"  className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={mongo} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={mysql} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={lite} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={redis} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={ibm} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={rube} alt="html" className='skillAnimation' />
          </div>
          <div className='skill2 skills'>
            <img src={postgresql} alt="html" className='skillAnimation' />
          </div>
          <div className='skill skills'>
            <img src={maria} alt="html" className='skillAnimation' />
          </div>
        </Marquee>
       </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="technologies">
          <div>
            <h3 className="text-xl md:text-3xl font-bold ">Reporting</h3>
            <ul className="category">
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small>iReport</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small>Crystal Report</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small>Microsoft Reporting Server</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small>Microsoft Client reports</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small>HTML5</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small>CharJs, Google Chart, Flot</small>
              </li>
            </ul>
          </div>
          <div className="technologyRightSide">
            <lottie-player
              id="firstLottie"
              autoplay
              loop
              mode="normal"
              src="/reporting.json"
              className="animation"
            ></lottie-player>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="technologies">
          <div>
            <h3 className="text-3xl font-bold mb-5">Project Management </h3>
            <ul className="category">
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> Scrum, TDD, CI</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> Microsoft Project Server, Microsoft Project</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> Jira</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> Trello, Redmine</small>
              </li>
            </ul>
          </div>
          <div className="technologyRightSide">
            <lottie-player
              id="firstLottie"
              autoplay
              loop
              mode="normal"
              src="/programming.json"
              className="animation"
            ></lottie-player>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="technologies">
          <div>
            <h3 className="text-xl md:text-3xl font-bold ">Testing</h3>
            <ul className="category">
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> MSTest</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> NUnit</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> JUnit</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> TestNG</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> Selenium (Java/C#/Python)</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> Apium</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> LoadRunner</small>
              </li>
              <li className="flex items-center">
                <small className="mr-3">
                  <FaRegCheckCircle className="checkIcon" />
                </small>{" "}
                <small> dEVTOOLS</small>
              </li>
            </ul>
          </div>
          <div className="technologyRightSide">
            <lottie-player
              id="firstLottie"
              autoplay
              loop
              mode="normal"
              src="/testing.json"
              className="animation"
            ></lottie-player>
          </div>
        </div>
      </TabPanel>
    </Box>
  </div>
   </Container>
  );
}

/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Container from "../../ui/Container";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import project from "../../../public/assets/project.webp";
import project2 from "../../../public/assets/project2.png";
import './WorkFlow.css';
export default function WorkPortfolio() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sectionMargin">
    <Container>

    <SectionTitle
      title=' "Pinnacle Portfolios: Where Vision Meets Reality" '
      text="At Pinnacle Portfolios, we believe in the transformative power of vision realized. Each portfolio within our collection embodies the convergence of bold imagination and meticulous execution, culminating in exceptional outcomes that redefine industry standards"
    ></SectionTitle>

  <div className="mt-10 workFlowWraps">
  <Box sx={{ width: "100%", typography: "body1" }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <TabList
        className="portfolioTabs"
        onChange={handleChange}
        aria-label="lab API tabs example"
      >
        <Tab label="Web Performance Optimization" value="1" />
        <Tab label="Dedicated Suppor" value="2" />
        <Tab label="Reliability and Scalability" value="2" />
        <Tab label="Proactive Monitoring" value="3" />
        <Tab label="Cost-Efficiency" value="4" />
      </TabList>
      
    </Box>
    <TabPanel value="1">
      <div className="whyChooces">
        <div className="chooseLeftSide">
          <h3 className="mb-5 text-3xl font-bold">
          "Zynix: Your Gateway to Tech Excellence"
          </h3>
          <p>
          "Welcome to Zynix, your premier destination for all things tech. From cutting-edge gadgets to sleek accessories, we offer a curated selection of top-tier products to elevate your digital lifestyle. With a seamless shopping experience and unparalleled customer service, Zynix is your trusted partner in navigating the ever-evolving world of technology."
          </p>
        </div>
        <div className="technologyRightSide">
          <img src={project2} alt="" />
        </div>
      </div>
    </TabPanel>
    <TabPanel value="2">
    <div className="whyChooces">
    <div className="chooseLeftSide">
    <h3 className="mb-5 text-3xl font-bold">
    "Zynix: Your Gateway to Tech Excellence"
    </h3>
    <p>
    "Welcome to Zynix, your premier destination for all things tech. From cutting-edge gadgets to sleek accessories, we offer a curated selection of top-tier products to elevate your digital lifestyle. With a seamless shopping experience and unparalleled customer service, Zynix is your trusted partner in navigating the ever-evolving world of technology."
    </p>
  </div>
      <div className="technologyRightSide">
        <img src={project} alt="" />
      </div>
    </div>
  </TabPanel>
  <TabPanel value="3">
  <div className="whyChooces">
  <div className="chooseLeftSide">
  <h3 className="mb-5 text-3xl font-bold">
  "Zynix: Your Gateway to Tech Excellence"
  </h3>
  <p>
  "Welcome to Zynix, your premier destination for all things tech. From cutting-edge gadgets to sleek accessories, we offer a curated selection of top-tier products to elevate your digital lifestyle. With a seamless shopping experience and unparalleled customer service, Zynix is your trusted partner in navigating the ever-evolving world of technology."
  </p>
</div>
    <div className="technologyRightSide">
      <img src={project2} alt="" />
    </div>
  </div>
</TabPanel>
<TabPanel value="3">
<div className="whyChooces">
  <div className="chooseLeftSide">
    <h3 className="mb-5 text-3xl font-bold">
      Web Performance Optimization
    </h3>
    <p>
      Softypy has a proven track record of enhancing website
      performance. They employ cutting-edge technologies to optimize
      your e-commerce site, ensuring fast loading times, smooth
      navigation, and a seamless shopping experience for your
      customers. With their expertise, you can significantly reduce
      bounce rates and cart abandonment.
    </p>
  </div>
  <div className="technologyRightSide">
    <img src={project2} alt="" />
  </div>
</div>
</TabPanel>
<TabPanel value="3">
<div className="whyChooces">
<div className="chooseLeftSide">
  <h3 className="mb-5 text-3xl font-bold">
    Web Performance Optimization
  </h3>
  <p>
    Softypy has a proven track record of enhancing website
    performance. They employ cutting-edge technologies to optimize
    your e-commerce site, ensuring fast loading times, smooth
    navigation, and a seamless shopping experience for your
    customers. With their expertise, you can significantly reduce
    bounce rates and cart abandonment.
  </p>
</div>
<div className="technologyRightSide">
  <img src={project2} alt="" />
</div>
</div>
</TabPanel>
  </TabContext>
</Box>
  </div>
</Container>
    </div>
  );
}

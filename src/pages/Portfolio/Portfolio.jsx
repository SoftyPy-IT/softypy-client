import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  CircularProgress,
  AppBar,
} from "@mui/material";
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./Portfolio.css";
import { useGetPortfolioQuery } from "../../redux/features/portfolio/portfolioApi";


const Portfolio = () => {
  const { data: portfolioData, isLoading, isError } = useGetPortfolioQuery({
    allData: true,
  });
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError || !portfolioData) {
    return <Typography>Error fetching data.</Typography>;
  }

  const categories = [
    { label: "All", projects: portfolioData.portfolio },
    {
      label: "E-Commerce",
      projects: portfolioData.portfolio.filter(
        (item) => item.category === "E-commerce"
      ),
    },
    {
      label: "Travel Agency",
      projects: portfolioData.portfolio.filter(
        (item) => item.category === "Travel Agency"
      ),
    },
    {
      label: "News Portal",
      projects: portfolioData.portfolio.filter(
        (item) => item.category === "News Portal"
      ),
    },
    {
      label: "Non-Profit",
      projects: portfolioData.portfolio.filter(
        (item) => item.category === "Non-Profit"
      ),
    },
    {
      label: "Real Estate",
      projects: portfolioData.portfolio.filter(
        (item) => item.category === "Real State"
      ),
    },
    {
      label: "Education",
      projects: portfolioData.portfolio.filter(
        (item) => item.category === "Educations"
      ),
    },
    {
      label: "ERP",
      projects: portfolioData.portfolio.filter(
        (item) => item.category === "ERP"
      ),
    },
  ];
  const tabStyles = {
    color: "#fff",
    minHeight: "unset",
    BorderBottom: "none",
    "&.Mui-selected": {
      backgroundColor: "#4168AB",
      color: "#fff",
      borderRadius: "3px",
      BorderBottom: "none",
    },
  };

  return (
    <div>
      <div className="">
        <div className="navsBarWrap">
          <div className="shadow-lg">
            <NavBar />
          </div>
          <div className="serviceDetailsWrap aboutWraps portfolioContainer">
            <div className="aboutContent ">
              <h2 className="md:text-3xl font-bold text-center uppercase lg:text-5xl ">
                Our Portfolio
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="mb-24 sectionMargin">
          <SectionTitle title="Working Portfolio" />
          <div className="mt-8 mb-24">
            <AppBar position="static" color="default">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#1586FD",
                  color: "white",
                }}
              >
                <Tabs
                  value={tabIndex}
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="portfolio categories"
                  indicatorColor="primary"
                  textColor="primary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  {categories.map((category, index) => (
                    <Tab sx={tabStyles} key={index} label={category.label} />
                  ))}
                </Tabs>
              </Box>
            </AppBar>
            {categories.map((category, index) => (
              <TabPanel key={index} value={tabIndex} index={index}>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 gap-10 place-items-center">
                  {category.projects.map((item, idx) => (
                    <Link key={idx} to={item.link} target="_blank">
                      <div
                        className="singlePortfolio portfolio19"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="bg-[#1586FD] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0">
                          <h2 className="text-sm md:text-xl">{item.title}</h2>
                          <p className="hidden xl:block">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabPanel>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default Portfolio;

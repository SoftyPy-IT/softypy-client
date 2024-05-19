import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./Portfolio.css";
import { useGetPortfolioQuery } from "../../redux/features/portfolio/portfolioApi";

const Portfolio = () => {
  const { data: portfolioData, isLoading, isError } = useGetPortfolioQuery();
  const [tabIndex, setTabIndex] = useState(0);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !portfolioData) {
    return <p>Error fetching data.</p>;
  }

 
  const EcommerceProjects = portfolioData.filter(
    (item) => item.category === "E-commerce"
  );
  const travelAgencyProject = portfolioData.filter(
    (item) => item.category === "Travel Agency"
  );
  const nonProfitProject = portfolioData.filter(
    (item) => item.category === "Non-Profit"
  );
  const realStateProjects = portfolioData.filter(
    (item) => item.category === "Real State"
  );
  const educationProjects = portfolioData.filter(
    (item) => item.category === "Educations"
  );
  const erpProjects = portfolioData.filter(
    (item) => item.category === "ERP"
  );
  const newsPortalProjects = portfolioData.filter(
    (item) => item.category === "News Portal"
  );

  return (
    <div>
      <div className="">
        <div className="navsBarWrap">
          <div className="shadow-lg">
            <NavBar />
          </div>
          <div className="aboutContainers portfolioContainer">
            <div className="aboutContent">
              <div className="flex items-center  aboutBtnTopWraps uppercase bg-[#40C7F4] text-white rounded-md w-[200px] justify-between mb-5 px-3 py-3">
                <p>Home</p>
                <FaAngleRight />
                <p>Portfolio </p>
              </div>
              <h2 className="ml-0 text-xl md:text-3xl font-bold md:text-left text-center uppercase lg:text-5xl">
                Our Portfolio
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="mb-24 sectionMargin">
          <SectionTitle title="Working Portfolio"></SectionTitle>
          <div className="mt-8 mb-24">
            <Tabs
              className="tabWrap"
              defaultTabIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList>
                <Tab>All</Tab>
                <Tab>E-Commerce </Tab>
                <Tab>Travel Agency</Tab>
                <Tab> News Portal</Tab>
                <Tab> Non-Profit</Tab>
                <Tab>Real State</Tab>
                <Tab>Educations</Tab>
                <Tab>ERP</Tab>
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  {portfolioData.map((item, index) => (
                    <Link key={index} to={item.link} target="_blank">
                      <div
                        className="singlePortfolio portfolio19"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0">
                          <h2 className="text-sm md:text-xl">{item.title}</h2>
                          <p className="hidden xl:block">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  {EcommerceProjects.map((item, index) => (
                    <Link key={index} to={item.link} target="_blank">
                      <div
                        className="singlePortfolio portfolio19"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0">
                          <h2 className="text-sm md:text-xl">{item.title}</h2>
                          <p className="hidden xl:block">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabPanel> 
              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  {travelAgencyProject.map((item, index) => (
                    <Link key={index} to={item.link} target="_blank">
                      <div
                        className="singlePortfolio portfolio19"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0">
                          <h2 className="text-sm md:text-xl">{item.title}</h2>
                          <p className="hidden xl:block">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  {newsPortalProjects.map((item, index) => (
                    <Link key={index} to={item.link} target="_blank">
                      <div
                        className="singlePortfolio portfolio19"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0">
                          <h2 className="text-sm md:text-xl">{item.title}</h2>
                          <p className="hidden xl:block">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  {nonProfitProject.map((item, index) => (
                    <Link key={index} to={item.link} target="_blank">
                      <div
                        className="singlePortfolio portfolio19"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0">
                          <h2 className="text-sm md:text-xl">{item.title}</h2>
                          <p className="hidden xl:block">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  {realStateProjects.map((item, index) => (
                    <Link key={index} to={item.link} target="_blank">
                      <div
                        className="singlePortfolio portfolio19"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0">
                          <h2 className="text-sm md:text-xl">{item.title}</h2>
                          <p className="hidden xl:block">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  {educationProjects.map((item, index) => (
                    <Link key={index} to={item.link} target="_blank">
                      <div
                        className="singlePortfolio portfolio19"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0">
                          <h2 className="text-sm md:text-xl">{item.title}</h2>
                          <p className="hidden xl:block">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  {erpProjects.map((item, index) => (
                    <Link key={index} to={item.link} target="_blank">
                      <div
                        className="singlePortfolio portfolio19"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0">
                          <h2 className="text-sm md:text-xl">{item.title}</h2>
                          <p className="hidden xl:block">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabPanel>
              {/* Add TabPanel for other categories if needed */}
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;

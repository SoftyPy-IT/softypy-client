import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Fetch portfolio data when component mounts
    // This ensures that the data is fetched before rendering
    // If you're using Redux Toolkit's useGetPortfolioQuery hook,
    // data fetching is already handled by the hook, so you might not need this effect
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !portfolioData) {
    return <p>Error fetching data.</p>;
  }

  // Filter projects belonging to the eCommerce category
  const ecommerceProjects = portfolioData.filter(
    (item) => item.category === "E-commerce"
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
                <Tab>E-commerce</Tab>
                <Tab>Education</Tab>
                <Tab>Non profite</Tab>
                {/* Add more tabs for other categories if needed */}
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  {ecommerceProjects.map((item, index) => (
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
              {/* Add TabPanel for other categories if needed */}
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;

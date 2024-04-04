/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import { useGetPortfolioQuery } from "../../redux/features/portfolio/portfolioApi";
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./Portfolio.css";
const Portfolio = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // const {
  //   data: portfolio,
  //   isLoading,
  //   isError,
  // } = useGetPortfolioQuery(undefined);
  // console.log(portfolio);
  // if (isLoading) {
  //   return <p>Loading.....</p>;
  // }
  // if (isError) {
  //   return <p>Something went to wrong</p>;
  // }

  return (
    <div>
      <div className="">
        <div className="navsBarWrap">
          <div className="shadow-lg">
            <NavBar />
          </div>
          <div className="aboutContainers portfolioContainer">
            <div className="aboutContent">
              <div className="flex items-center uppercase bg-[#40C7F4] text-white rounded-md w-[200px] justify-between mb-5 px-3 py-3">
                <p>Home</p>
                <FaAngleRight />
                <p>Portfolio </p>
              </div>
              <h2 className="ml-0 text-3xl font-bold text-left uppercase md:text-5xl  md:text-center ">
                Our Portfolio
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="mb-24 sectionMargin">
          <SectionTitle title="Working Portfolio"></SectionTitle>
          <div className="mt-8mb-24">
            <Tabs
              className="tabWrap"
              defaultTabIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList>
                <Tab>All </Tab>
                <Tab>E-Commerce</Tab>
                <Tab>Travel Agency </Tab>
                <Tab>News Portal </Tab>
                <Tab>Non-Profit </Tab>
                <Tab>Real Estate </Tab>
                <Tab>Education </Tab>
                <Tab>ERP </Tab>
              </TabList>
              <TabPanel>
                <div className="grid justify-between grid-cols-1 gap-10 portfolio lg:grid-cols-2">
                  <Link to="https://www.ghuronti.com/" target="_blank">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/ghuronti3.jpeg')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          ghuronti.com: Your gateway to unforgettable
                          adventures. Explore curated travel experiences
                          worldwide with our expert guidance and personalized
                          service. Start your journey today!
                        </p>
                      </div>
                    </div>
                  </Link>

               

                <Link to="https://buildingplanner.com.bd/">
                  <div
                    style={{
                      backgroundImage: `url('../../../public/assets/trandhaven.png')`,
                      backgroundSize: "cover",
                    }}
                    className="singlePortfolio "
                  >
                    <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                      <h2 className="text-xl">Trandhaven </h2>
                      <p>
                        Trandhaven Crafting unforgettable experiences. From
                        concept to execution, we deliver seamless events
                        tailored to your vision.
                      </p>
                    </div>
                  </div>
                </Link>

                 
                  
               
                  <Link to="https://airtrips.net/" target="_blank">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Airtrips Travels Ltd</h2>
                        <p>
                          Airtrips.com: Elevate your travel experience. Discover
                          seamless booking, exclusive deals, and tailored
                          itineraries. Your passport to extraordinary adventures
                          awaits. Begin your journey with us!
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/*** 
                  <Link to="https://nextstair.com/" target="_blank">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/NextStair.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Nextstair</h2>
                        <p>
                          NextStair: Ascend to the latest news heights. Dive
                          into diverse perspectives, breaking stories, and
                          insightful analysis. Your daily staircase to informed
                          decisions and enriched understanding.
                        </p>
                      </div>
                    </div>
                  </Link>
*/}

                  <Link to="https://taqwaacor.com/" target="_blank">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/Taqwaa3.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Taqwaacor</h2>
                        <p>
                          Taqwaacor.com: Elevate your shopping experience.
                          Explore a diverse range of quality products, from
                          fashion to electronics. Trustworthy service, secure
                          transactions, and swift
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="https://aidurgency.vercel.app/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/Give.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">GIVE</h2>
                        <p>
                          "Give.com: Empowering generosity. Support causes that
                          matter. Easy, secure donations. Make a difference
                          today with just a few clicks."
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="https://www.ghuronti.com/" target="_blank">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/Bus.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          ghuronti.com: Your gateway to unforgettable
                          adventures. Explore curated travel experiences
                          worldwide with our expert guidance and personalized
                          service. Start your journey today!
                        </p>
                      </div>
                    </div>
                  </Link>



                  <Link to="https://arkaxis.net/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/Arkaxis.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis</h2>
                        <p>
                          "ArkAxis: Navigate the world's complexities.
                          Cutting-edge analysis, strategic insights, and
                          innovative solutions. Empowering decision-makers for a
                          brighter future."
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://softy-express.vercel.app/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/zynix.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">zynix</h2>
                        <p>
                          "Zynix: Your ultimate shopping destination. Discover
                          trendy products, unbeatable deals, and seamless
                          shopping experience. Elevate your lifestyle with just
                          a click."
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://event360-five.vercel.app/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/event.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Event360</h2>
                        <p>
                          Event360: Crafting unforgettable experiences. From
                          concept to execution, we deliver seamless events
                          tailored to your vision.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="https://trust-auto-solution.vercel.app/dashboard">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/Trust-Auto-Solution.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio portfolio19"
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Trust-Auto-Solution</h2>
                        <p>
                          <p>
                            Trust Auto Solution: Streamline garage management
                            effortlessly. From scheduling to inventory, our
                            intuitive platform optimizes.
                          </p>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="https://shop-master-five.vercel.app/dashboard"
                    target="_blank"
                  >
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/shop-master.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio portfolio19"
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Shop Master </h2>
                        <p>
                          Shop Master Your gateway to unforgettable adventures.
                          Explore curated travel experiences worldwide with our
                          expert guidance and personalized service. Start your
                          journey today!
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="https://newsdarpan24.com/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/news24.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">News24</h2>
                        <p>
                          news24darpan.com Crafting unforgettable experiences.
                          From concept to execution, we deliver seamless events
                          tailored to your vision.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://buildingplanner.com.bd/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/building.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Building Planner </h2>
                        <p>
                          buildingplanner.com Crafting unforgettable
                          experiences. From concept to execution, we deliver
                          seamless events tailored to your vision.
                        </p>
                      </div>
                    </div>
                  </Link>

                
                  <Link to="https://buildingplanner.com.bd/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/techzon.jpeg')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Techzon </h2>
                        <p>
                          Techzon Crafting unforgettable experiences. From
                          concept to execution, we deliver seamless events
                          tailored to your vision.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://buildingplanner.com.bd/">
                  <div
                    style={{
                      backgroundImage: `url('../../../public/assets/summing.png')`,
                      backgroundSize: "cover",
                    }}
                    className="singlePortfolio "
                  >
                    <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                      <h2 className="text-xl">
                        Qrbangladesh Swimmingpoolstrore{" "}
                      </h2>
                      <p>
                        qrbangladeshswimmingpoolstore.com Crafting
                        unforgettable experiences. From concept to execution,
                        we deliver seamless events tailored to your vision.
                      </p>
                    </div>
                  </div>
                </Link>
                  <Link to="https://www.ghuronti.com/hajj/search">
                    <div className="singlePortfolio portfolio10">
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Hajj & Umrah</h2>
                        <p>
                          Ghuronti.com: Your gateway to unforgettable
                          adventures. Explore curated travel experiences
                          worldwide with our expert
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://havenly-de0a6.web.app/">
                    <div className="singlePortfolio portfolio11">
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">House Rent </h2>
                        <p>
                          HouseRent: Your key to finding the perfect home.
                          Discover listings tailored to your needs. Let us help
                          you find your dream space.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://monumental-cheesecake-9a7972.netlify.app/">
                    <div className="singlePortfolio portfolio12">
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Education </h2>
                        <p>
                          EduXcellence: Unlocking potential through education.
                          Empowering learners with innovative tools, resources,
                          and personalized support for academic success and
                          lifelong learning.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/" target="_blank">
                  <div
                    style={{
                      backgroundImage: `url('../../../public/assets/Ghuronti-Visa.png')`,
                      backgroundSize: "cover",
                    }}
                    className="singlePortfolio "
                  >
                    <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                      <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      <p>
                        ghuronti.com: Your gateway to unforgettable
                        adventures. Explore curated travel experiences
                        worldwide with our expert guidance and personalized
                        service. Start your journey today!
                      </p>
                    </div>
                  </div>
                </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio portfolio13">
                      <div className="singlePortfolio ">
                        <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                          <h2 className="text-xl">Digital Agency </h2>
                          <p>
                            EduXcellence: Unlocking potential through education.
                            Empowering learners with innovative tools,
                            resources, and personalized support for academic
                            success and lifelong learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid justify-between grid-cols-1 gap-10 portfolio lg:grid-cols-2">
                  <Link to="https://buildingplanner.com.bd/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/trandhaven.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Trandhaven </h2>
                        <p>
                          Trandhaven Crafting unforgettable experiences. From
                          concept to execution, we deliver seamless events
                          tailored to your vision.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://buildingplanner.com.bd/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/techzon.jpeg')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Techzon </h2>
                        <p>
                          Techzon Crafting unforgettable experiences. From
                          concept to execution, we deliver seamless events
                          tailored to your vision.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://taqwaacor.com/" target="_blank">
                  <div
                    style={{
                      backgroundImage: `url('../../../public/assets/Taqwaa3.png')`,
                      backgroundSize: "cover",
                    }}
                    className="singlePortfolio "
                  >
                    <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                      <h2 className="text-xl">Taqwaacor</h2>
                      <p>
                        Taqwaacor.com: Elevate your shopping experience.
                        Explore a diverse range of quality products, from
                        fashion to electronics. Trustworthy service, secure
                        transactions, and swift
                      </p>
                    </div>
                  </div>
                </Link>
                  <Link to="https://softy-express.vercel.app/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/zynix.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">zynix</h2>
                        <p>
                          "Zynix: Your ultimate shopping destination. Discover
                          trendy products, unbeatable deals, and seamless
                          shopping experience. Elevate your lifestyle with just
                          a click."
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                <Link to="https://www.ghuronti.com/" target="_blank">
                <div
                  style={{
                    backgroundImage: `url('../../../public/assets/ghuronti3.jpeg')`,
                    backgroundSize: "cover",
                  }}
                  className="singlePortfolio "
                >
                  <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                    <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                    <p>
                      ghuronti.com: Your gateway to unforgettable
                      adventures. Explore curated travel experiences
                      worldwide with our expert guidance and personalized
                      service. Start your journey today!
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="https://airtrips.net/" target="_blank">
              <div
                style={{
                  backgroundImage: `url('../../../public/assets/AirTrips.png')`,
                  backgroundSize: "cover",
                }}
                className="singlePortfolio "
              >
                <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                  <h2 className="text-xl">Airtrips Travels Ltd</h2>
                  <p>
                    Airtrips.com: Elevate your travel experience. Discover
                    seamless booking, exclusive deals, and tailored
                    itineraries. Your passport to extraordinary adventures
                    awaits. Begin your journey with us!
                  </p>
                </div>
              </div>
            </Link>
                  <Link to="https://www.ghuronti.com/hajj/search">
                    <div className="singlePortfolio portfolio10">
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Hajj & Umrah</h2>
                        <p>
                          Ghuronti.com: Your gateway to unforgettable
                          adventures. Explore curated travel experiences
                          worldwide with our expert
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="https://www.ghuronti.com/" target="_blank">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/Ghuronti-Visa.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          ghuronti.com: Your gateway to unforgettable
                          adventures. Explore curated travel experiences
                          worldwide with our expert guidance and personalized
                          service. Start your journey today!
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/" target="_blank">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/Bus.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                        <p>
                          ghuronti.com: Your gateway to unforgettable
                          adventures. Explore curated travel experiences
                          worldwide with our expert guidance and personalized
                          service. Start your journey today!
                        </p>
                      </div>
                    </div>
                  </Link>
                
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  <Link to="https://newsdarpan24.com/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/news24.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">News24</h2>
                        <p>
                          news24darpan.com Crafting unforgettable experiences.
                          From concept to execution, we deliver seamless events
                          tailored to your vision.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  <Link to="https://aidurgency.vercel.app/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/Give.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">GIVE</h2>
                        <p>
                          "Give.com: Empowering generosity. Support causes that
                          matter. Easy, secure donations. Make a difference
                          today with just a few clicks."
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  <Link to="https://buildingplanner.com.bd/">
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/building.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Building Planner </h2>
                        <p>
                          buildingplanner.com Crafting unforgettable
                          experiences. From concept to execution, we deliver
                          seamless events tailored to your vision.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio portfolio3">
                      <div className="bg-[#40C7F4] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://havenly-de0a6.web.app/">
                    <div className="singlePortfolio portfolio11">
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">House Rent </h2>
                        <p>
                          HouseRent: Your key to finding the perfect home.
                          Discover listings tailored to your needs. Let us help
                          you find your dream space.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                <Link to="https://buildingplanner.com.bd/">
                <div
                  style={{
                    backgroundImage: `url('../../../public/assets/softyEdu.png')`,
                    backgroundSize: "cover",
                  }}
                  className="singlePortfolio "
                >
                  <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                    <h2 className="text-xl">SoftEdu </h2>
                    <p>
                      SoftEdu Crafting unforgettable experiences. From
                      concept to execution, we deliver seamless events
                      tailored to your vision.
                    </p>
                  </div>
                </div>
              </Link>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 portfolio lg:grid-cols-2 place-items-center">
                  <Link to="https://trust-auto-solution.vercel.app/dashboard">
                    <div
                      
                      className="singlePortfolio portfolio19 "
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Trust-Auto-Solution</h2>
                        <p>
                          <p>
                            Trust Auto Solution: Streamline garage management
                            effortlessly. From scheduling to inventory, our
                            intuitive platform optimizes.
                          </p>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="https://shop-master-five.vercel.app/dashboard"
                    target="_blank"
                  >
                    <div
                      style={{
                        backgroundImage: `url('../../../public/assets/shop-master.png')`,
                        backgroundSize: "cover",
                      }}
                      className="singlePortfolio portfolio19"
                    >
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-2 right-0 bottom-0  ">
                        <h2 className="text-xl">Shop Master </h2>
                        <p>
                          Shop Master Your gateway to unforgettable adventures.
                          Explore curated travel experiences worldwide with our
                          expert guidance and personalized service. Start your
                          journey today!
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;

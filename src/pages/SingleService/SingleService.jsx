/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import "./SingleService.css";
import { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WhyChoosSe from "../Home/ChoosUs/WhyChoosSe";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Products from "../../components/MoreProducts/Products";
import NavBar from "../Shared/NavBar/NavBar";
import { useGetSingleServicesQuery } from "../../redux/features/singleServices/singleServicesApi";
import { Link, useParams } from "react-router-dom";
AOS.init();

const SingleService = () => {
  const [checked, setChecked] = useState([1]);
  const [tabIndex, setTabIndex] = useState(0);

  const { id } = useParams();
  const { data: services, isLoading, isError } = useGetSingleServicesQuery(id);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  if (isLoading) {
    return <p>Loding............</p>;
  }
  if (isError) {
    return <p>Something went to wrong </p>;
  }

  return (
    <div>
      <div className="servicessWraps">
        <div className="navsBarWrap">
          <div className="text-white">
            <NavBar />
          </div>

          <div className="servicesContents">
            <div className="singleServicessContent">
              <h2 className="text-2xl md:text-5xl font-bold">
                {services?.title}
                {/* One-Stop Shop for All Your Online Needs{" "} */}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="singleServicesWrap ">
        <div className="ecommerServices">
          <div className="leftSideServices">
            <h3 className="text-4xl font-bold mb-3">
              Why Need {services?.title}?
            </h3>
            <div className="my-2">
              <b>{services.subtitle}:</b>
              <p>{services.description}</p>
            </div>
            <div className="my-2">
              <b> 24/7 Accessibility: </b>
              <p>
                Your eCommerce website never closes. It provides customers with
                the convenience of shopping whenever they prefer, whether it is
                early morning or late at night. This accessibility enhances
                customer satisfaction and boosts sales.
              </p>
            </div>
          </div>
          <div className="rightSideServices">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="/ecommerce.json"
            ></lottie-player>
          </div>
        </div>
        <div className="sectionMargin">
          <SectionTitle title="Our More Services "></SectionTitle>
          <Products />
        </div>
        <div className="sectionMargin">
          <SectionTitle
            className="portfolioTitle"
            title="Some Of Our Work Portfolio "
            text=' "At SoftyPy, we deliver reliable IT solutions. Our portfolio highlights our expertise in problem-solving, system optimization, and exceptional customer service, ensuring your business is success."'
          ></SectionTitle>
          <div className="mt-16 mb-5">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">
                          Ghuronti Travels Ltd
                        </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">Trandhaven </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">
                          Airtrips Travels Ltd
                        </h2>
                        <p className="hidden xl:block">
                          Airtrips.com: Elevate your travel experience. Discover
                          seamless booking, exclusive deals, and tailored
                          itineraries. Your passport to extraordinary adventures
                          awaits. Begin your journey with us!
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">Taqwaacor</h2>
                        <p className="hidden xl:block">
                          Taqwaacor.com: Elevate your shopping experience.
                          Explore a diverse range of quality products, from
                          fashion to electronics. Trustworthy service, secure
                          transactions, and swift
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">Techzon </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">
                          Qrbangladesh Swimmingpoolstrore{" "}
                        </h2>
                        <p className="hidden xl:block">
                          qrbangladeshswimmingpoolstore.com Crafting
                          unforgettable experiences. From concept to execution,
                          we deliver seamless events tailored to your vision.
                        </p>
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">Trandhaven </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">Techzon </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">Taqwaacor</h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">zynix</h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">
                          Ghuronti Travels Ltd
                        </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">
                          Airtrips Travels Ltd
                        </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">Hajj & Umrah</h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">
                          Ghuronti Travels Ltd
                        </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">
                          Ghuronti Travels Ltd
                        </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">News24</h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">GIVE</h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">
                          Building Planner{" "}
                        </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">House Rent </h2>
                        <p className="hidden xl:block">
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">SoftEdu </h2>
                        <p className="hidden xl:block">
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
                    <div className="singlePortfolio portfolio19 ">
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">
                          Trust-Auto-Solution
                        </h2>

                        <p className="hidden xl:block">
                          Trust Auto Solution: Streamline garage management
                          effortlessly. From scheduling to inventory, our
                          intuitive platform optimizes.
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
                      <div className="bg-[#40C7F4] text-white absolute w-full px-10 py-1 md:py-2 right-0 bottom-0  ">
                        <h2 className="text-sm md:text-xl">Shop Master </h2>
                        <p className="hidden xl:block">
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
        <div className="sectionMargin">
          <SectionTitle title="Why Choose SoftyPy For Your Software Solution?"></SectionTitle>
          <div className="whyChooseServices ">
            <WhyChoosSe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;

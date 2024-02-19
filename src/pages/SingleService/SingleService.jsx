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

  const {id} = useParams()
const {data:services, isLoading, isError} = useGetSingleServicesQuery(id)
if(isLoading){
  return <p>Loding............</p>
}
if(isError){
  return <p>Something went to wrong </p>
}

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
              <h3 className="text-xl  md:text-2xl font-bold mt-5">
                {/* Best Web Development Company In Bangladesh */}
                {services?.subtitle}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="singleServicesWrap">
        <div className="ecommerServices">
          <div className="leftSideServices">
            <h3 className="text-4xl font-bold mb-3">
              Why Need {services?.title}?
            </h3>
            <div className="my-2">

              <b>Global Reach:</b>
              <p>{services.description}</p>
              <p>
                {" "}
                An eCommerce website enables your business to transcend
                geographical boundaries, reaching potential customers worldwide.
                It breaks down the limitations of a physical store and offers an
                expansive global market to tap into.
              </p>
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
            <div className="my-2">
              <b> Cost-Effective: </b>
              <p>
                {" "}
                Operating an eCommerce website is often more cost-effective than
                maintaining a physical storefront. You save on expenses related
                to rent, utilities, and staff, making it an efficient way to run
                a business.
              </p>
            </div>
            <div className="my-2">
              <b> Customer Convenience:</b>
              <p>
                {" "}
                Shoppers appreciate the convenience of browsing and buying from
                the comfort of their homes. They can also compare products, read
                reviews, and access detailed product information, contributing
                to a better shopping experience.
              </p>
            </div>
            <div className="my-2">
              <b> Marketing Opportunities: </b>
              <p>
                {" "}
                Online marketing tools and strategies like SEO, email marketing,
                and social media can be seamlessly integrated into your
                eCommerce website. These tools help increase your online
                visibility and drive more traffic.
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
        <div className="my-10">
          <SectionTitle title="Our More Products "></SectionTitle>
          <Products />
        </div>
        <div>
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
                <Tab>Corporate </Tab>
                <Tab>Real Estate </Tab>
                <Tab>Education </Tab>
              </TabList>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                  <Link>
                    <div className="singlePortfolio singleServicePortFolio portfolio1">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio singleServicePortFolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://airtrips.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio4">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Airtrips </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio5">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Animate</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio6">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 md:grid-cols-3 place-items-center">
                  <Link>
                    <div className="singlePortfolio singleServicePortFolio portfolio1">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio singleServicePortFolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://airtrips.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio4">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Airtrips </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio5">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Animate</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio6">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 md:grid-cols-3 place-items-center">
                  <Link>
                    <div className="singlePortfolio singleServicePortFolio portfolio1">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio singleServicePortFolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://airtrips.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio4">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Airtrips </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio5">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Animate</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio6">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 md:grid-cols-3 place-items-center">
                  <Link>
                    <div className="singlePortfolio singleServicePortFolio portfolio1">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio singleServicePortFolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://airtrips.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio4">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Airtrips </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio5">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Animate</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio6">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 md:grid-cols-3 place-items-center">
                  <Link>
                    <div className="singlePortfolio singleServicePortFolio portfolio1">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio singleServicePortFolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://airtrips.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio4">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Airtrips </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio5">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Animate</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio6">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 md:grid-cols-3 place-items-center">
                  <Link>
                    <div className="singlePortfolio singleServicePortFolio portfolio1">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio singleServicePortFolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://airtrips.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio4">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Airtrips </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio5">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Animate</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio6">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio grid grid-cols-1 md:grid-cols-3 place-items-center">
                  <Link>
                    <div className="singlePortfolio singleServicePortFolio portfolio1">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://nextstair.com/">
                    <div className="singlePortfolio singleServicePortFolio portfolio2">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">NextStair</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://arkaxis.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio3">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Arkaxis Ltd</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://airtrips.net/">
                    <div className="singlePortfolio singleServicePortFolio portfolio4">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Airtrips </h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio5">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Animate</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.ghuronti.com/hotel">
                    <div className="singlePortfolio singleServicePortFolio portfolio6">
                      <div className="bg-[#680C70] text-white absolute w-full right-0 bottom-0  ">
                        <h2 className="text-xl">Ghuronti Travels Ltd</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div>
          <SectionTitle title="Why Choose SoftyPy For Your Software Solution?"></SectionTitle>
          <div className="whyChooseServices">
            <WhyChoosSe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;

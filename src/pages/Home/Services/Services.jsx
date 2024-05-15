import "./Services.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../../../ui/Container";
import { useGetAllSingleServicesQuery } from "../../../redux/features/singleServices/singleServicesApi";
import web from "../../../../public/assets/icon6.png";
import digital from "../../../../public/assets/icon8.png";
import erp from "../../../../public/assets/icon3.png";
import wordpress from "../../../../public/assets/icon10.png";
import seo from "../../../../public/assets/icon9.png";

const Services = () => {
  const { data: services } = useGetAllSingleServicesQuery();

  console.log(services);

  return (
    <Container className="">
      <div className="sectionMargin">
        <div className="servicesWraps">
          <h3 className="text-3xl md:text-4xl mb-5 text-[#2D57A2] font-bold text-center md:hidden block ">
            Our Services
          </h3>
          <div className="ourServicesWrap">
            <div className="ourServiceLeftSide">
              <h3 className="text-2xl text-center md:text-4xl mb-3 text-[#2D57A2] font-bold hidden md:block">
                Our Services
              </h3>
              <p>
                {" "}
                At SoftyPy, we drive digital excellence through our range of IT
                services. Our innovative solutions are tailored to meet your
                specific needs, ensuring your business remains agile and
                competitive. Partner with us to accelerate your digital journey
                and thrive in the evolving tech landscape.
              </p>
            </div>
            <div className="ourServicesRightSide">
              <div>
                <div className="grid grid-cols-2 place-items-center">
                  {services?.map((card) => (
                    <div key={card._id} className="cards">
                      <div className="inner-box">
                        <div className="cards-front cards-front5">
                          <div className="iconWrap">
                            {card?.category.toLowerCase() == "development" ? (
                              <img src={web} alt="icon" />
                            ) : null}
                            {card?.category.toLowerCase() == "digital" ? (
                              <img src={digital} alt="icon" />
                            ) : null}
                            {card?.category.toLowerCase() == "erp" ? (
                              <img src={erp} alt="icon" />
                            ) : null}
                            {card?.category.toLowerCase() == "seo" ? (
                              <img src={seo} alt="icon" />
                            ) : null}
                            {card?.category.toLowerCase() == "wordpress" ? (
                              <img src={wordpress} alt="icon" />
                            ) : null}
                          </div>
                          <p className="mt-2 font-bold">{card.category}</p>
                        </div>
                        <div className="cards-back text-white">
                          <div className="cards-back-content md:px-3 text-center">
                            <b className="block"> {card.category}</b>
                            <small className="my-1 md:my-3">
                              {card?.description?.slice(0, 80)}...
                            </small>
                            <div>
                              <Link to={`singleServices/${card._id}`}>
                                {" "}
                                <div className="flex items-center justify-center">
                                  {" "}
                                  <span>Read More </span>
                                  <small>
                                    <FaArrowRight />
                                  </small>
                                </div>
                              </Link>
                            </div>
                            {/* type=${packageType} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;

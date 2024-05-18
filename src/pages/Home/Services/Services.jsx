import "./Services.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../../../ui/Container";
import { useGetAllSingleServicesQuery } from "../../../redux/features/singleServices/singleServicesApi";

const Services = () => {
  const { data: services, isLoading, isError } = useGetAllSingleServicesQuery({ allData: true });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data.</p>;
  }

  if (!Array.isArray(services?.services) || services.length === 0) {
    return <p>No data available.</p>;
  }
  const sortServicesData = services?.services?.slice()?.sort((a,b)=>(a.priority - b.priority ))

  return (
    <Container className="">
      <div className="sectionMargin">
        <div className="servicesWraps">
          <h3 className="text-3xl md:text-4xl mb-5 text-[#2D57A2] font-bold text-center md:hidden block">
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
                  {sortServicesData?.map((card) => (
                    <div key={card._id} className="cards">
                      <div className="inner-box">
                        <div className="cards-front cards-front5">
                          <div className="iconWrap">
                            <img src={card.image} alt="icon" />
                          </div>
                          <p className="mt-2 font-bold">{card.category}</p>
                        </div>
                        <div className="cards-back text-white">
                          <div className="cards-back-content md:px-3 text-center">
                            <b className="block">{card.category}</b>
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

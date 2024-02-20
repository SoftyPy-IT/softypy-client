/* eslint-disable react/no-unescaped-entities */

import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Container from "../../ui/Container";
import {
  HiCode,
  HiDesktopComputer,
  HiLightBulb,
  HiOutlineQrcode,
  HiOutlineUserGroup,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import img from "../../../public/assets/line2.svg";


const HowSoftyPyWork = () => {
  const workData = [
    {
      id: 1,
      title: "RODUCT BACKLOG CREATION",
      image: "",
      subTitle:
        "Before any project work begins. we need to create a product backlog.",
    },
    {
      id: 1,
      title: "SPRINT PLANNING -SPRINT BACKLOG CREATION",
      image: "",
      subTitle:
        " In the second part of the Sprint planning session, we break down the stories",
    },
    {
      id: 1,
      title: "WORKING ON THE SPRINT",
      image: "",
      subTitle:
        "This is the time where the actual coding, testing, UI designing, echnical writeups",
    },
    {
      id: 1,
      title: "TESTING & DEBUGGING ",
      image: "",
      subTitle:
        "Before any project work begins. we need to create a product backlog.",
    },
    {
      id: 1,
      title: "SPRINT REVIEW RETROSPECTIVE",
      image: "",
      subTitle:
        "Before any project work begins. we need to create a product backlog.",
    },
  ];
  return (
    <Container>
      <div className="servicesWraps">
        <div className="">
          <SectionTitle
            title="How SoftyPy Work"
            text=" Unlocking digital potential, we provide bespoke IT services that blend innovation with reliability, ensuring your business stands out in a rapidly evolving tech landscape"
          ></SectionTitle>
        </div>
        <div className="ourServicesWrap">
          <div className="ourServiceLeftSide">
            <h3 className="text-3xl mb-3 text-[#F81600] font-bold ">
              "Unlocking Our Workflow: The Mechanics of How We Operate"
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
              <div className="cardsWrap">
                {workData?.map((card, i) => (
                  <div key={card.id} className="cards workCard">
                    <div className="inner-box">
                      <div
                        className={`cards-front cards-front2 cards-front5  ${
                          i === 2 ? "cardsFront2" : ""
                        } ${i === 1 ? "cardsFront3" : ""} ${
                          i === 3 ? "cardsFront4" : ""
                        } `}
                      >
                      
                        <div className="">
                          {i === 1 ? (
                            <p>
                              <HiLightBulb size={70} />{" "}
                            </p>
                          ) : (
                            ""
                          )}{" "}
                          {i === 0 ? (
                            <p>
                              <HiDesktopComputer size={70} />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                          {i === 2 ? (
                            <p>
                              <HiOutlineVideoCamera size={70} />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                          {i === 3 ? (
                            <p>
                              <HiOutlineUserGroup size={70} />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                          {i === 4 ? (
                            <p>
                              <HiCode size={70} />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                          {i === 5 ? (
                            <p>
                              <HiOutlineQrcode size={70} />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        <small className=" font-semibold text-[12px]">{card.title}</small>
                      </div>
                      <div className="cards-back cards-back2 text-white">
                        <div className="cards-back-content md:px-3 text-center">
                          <b className="block"> {card.title}</b>
                          <small className="my-1 md:my-3">
                            {card.subTitle.slice(0, 80)}...
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src={img} alt="line" className="cardLine" />
            <div className="cardLine2"></div>

            <div className="cardLine3"></div>
            <div className="cardLine4"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowSoftyPyWork;

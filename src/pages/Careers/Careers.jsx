import NavBar from "../Shared/NavBar/NavBar";
import Container from "../../ui/Container";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Careers.css";
import { Link } from "react-router-dom";
const Careers = () => {
  const jobData = [
    {
      id: 1,
      name: "Frontend Developer",
      text: "Onsite (Open position for you.)",
    },
    {
      id: 2,
      name: "MERN Stack Developer",
      text: "Onsite",
    },
    {
      id: 3,
      name: "UI/UX Designer",
      text: "Onsite",
    },
    {
      id: 4,
      name: "Java Developer",
      text: "Onsite",
    },
    {
      id: 5,
      name: "React Native Developer",
      text: "Onsite",
    },
    {
      id: 6,
      name: "Flutter Developer",
      text: "Onsite",
    },
  ];
  return (
    <div>
      <div className="shadow-lg">
        <NavBar />
      </div>
      <div className="careerContainerWraps">
        <div className="careerText">
          <h3 className="text-xl md:text-4xl xl:text-7xl font-bold">
            Build things you’re proud of
          </h3>
          <span className="block mt-4 text-sm md:text-xl">
            Join a crew as motivated as you. Make cool stuff for global brands.
            Level up, learn and grow.
          </span>
        </div>
      </div>

      <Container>
        <div className="px-5 xl:px-0">
          {jobData.map((data, i ) => (
            <div
              key={data.id}
              className=" block md:flex items-center justify-between mt-10 border-t pt-8 "
            >
              <div>
                <h2 className="text-xl md:text-3xl xl:text-5xl font-bold text-black">
                  {data.name}
                </h2>
                <span className="mt-2 block">{data.text} </span>
              </div>
             {
              i == 0 ? (
                <Link to="/careers-details">
                <button className="w-[140px]  md:w-[180px] mt-3 md:mt-0 h-[40px] md:h-[60px] border border-[#ddd]  flex items-center justify-center rounded-sm jobBtn">
                  <span>See Details</span>{" "}
                  <HiOutlineArrowNarrowRight className="ml-1" size={20} />
                </button>
              </Link>
              ): (
                <button className="w-[140px]  md:w-[180px] mt-3 md:mt-0 h-[40px] md:h-[60px] border border-[#ddd]  flex items-center justify-center rounded-sm jobBtn">
                <span>See Details</span>{" "}
                <HiOutlineArrowNarrowRight className="ml-1" size={20} />
              </button>
              )
             }
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Careers;

import { HiOutlineCode } from "react-icons/hi";
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import "./Website.css";
const Website = () => {
  const serviceData = [
    {
      id: 1,
      name: "E-commerce Websites",
      text: "E-commerce websites provide global accessibility, convenience, and data insights ",
    },
    {
      id: 1,
      name: "E-commerce Websites",
      text: "E-commerce websites provide global accessibility, convenience, and data insights ",
    },
    {
      id: 1,
      name: "E-commerce Websites",
      text: "E-commerce websites provide global accessibility, convenience, and data insights ",
    },
    {
      id: 1,
      name: "E-commerce Websites",
      text: "E-commerce websites provide global accessibility, convenience, and data insights ",
    },
    {
        id: 1,
        name: "E-commerce Websites",
        text: "E-commerce websites provide global accessibility, convenience, and data insights ",
      },
      {
        id: 1,
        name: "E-commerce Websites",
        text: "E-commerce websites provide global accessibility, convenience, and data insights ",
      },
      {
        id: 1,
        name: "E-commerce Websites",
        text: "E-commerce websites provide global accessibility, convenience, and data insights ",
      },
      {
        id: 1,
        name: "E-commerce Websites",
        text: "E-commerce websites provide global accessibility, convenience, and data insights ",
      },
  ];
  return (
    <div className="pb-64 bg-[#E5E5E5]">
      <div className=" portfolioHeroSection">
        <div className="navsBarWrap">
          <div className="text-white">
            <NavBar />
          </div>

          <div className=" portfolioContent">
            <h3 className="text-3xl md:text-5xl font-bold mb-2">
              Our Website Services{" "}
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full bg-red-500 h-[400px]  relative ">
        <Container>
          <div className="grid grid-cols-4 gap-5 ">
            {serviceData.map((data) => (
              <div key={data.id} className="servicesCard">
                <div>
                  <HiOutlineCode className="text-center mx-auto" size={70} />
                  <h3 className="text-xl font-semibold ">
                    {" "}
                    E-commerce Website{" "}
                  </h3>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Website;

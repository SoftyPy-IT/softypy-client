/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./Services.css";
import responsive from "../../../public/assets/dev.png";
import TopServices from "./TopServices/TopServices";
import BoostSection from "../../components/BostSection/BoostSection";
import NavBar from "../Shared/NavBar/NavBar";
import Container from "../../ui/Container";
import CommonButton from "../Shared/CommonButton/CommonButton";
const Services = () => {
  // const ref = useRef(null);
  // useEffect(() => {
  //   import("@lottiefiles/lottie-player");
  // });

  const cardData = [
    {
      id: 1,
      name: "Ecommerce Website ",
    },
    {
      id: 1,
      name: "Ecommerce Website ",
    },
    {
      id: 1,
      name: "Ecommerce Website ",
    },
    {
      id: 1,
      name: "Ecommerce Website ",
    },
  ];



  return (
    <div className="home">
    <div className="navsBarWrap">
    <div className="shadow-lg ">
      <NavBar />
    </div>


  </div>

 

      <Container>
        <div className="services sectionMargin ">
          <div className="servicesLeftSide">
            <h3>
              Premium Website Development Service Empowering Business Growth
              With Professionalism & Expertise
            </h3>
            <p className="my-5">
            We take pride in offering a comprehensive suite of cutting-edge services tailored to elevate your digital presence and streamline your business operations. Our commitment is to deliver solutions that not only meet but exceed your expectations.

            </p>
            <CommonButton text='Get More ' />
          </div>
          <div className="srvicesRightSide">
            <img src={responsive} alt="device" />
          </div>
        </div>
        <div className="sectionMargin">
          <TopServices />
        </div>
        {/*  
        <div className="ourServices sectionMargin">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-[50%] pr-5">
              <h2 className="  text-[#40C7F4] font-bold text-4xl">
                Types of Web Development Services
              </h2>
              <p>
                “Web design is not just about creating pretty layouts. It's
                about understanding the marketing challenge behind your
                business.”
              </p>
            </div>
            <div className="w-[100%] md:w-[50%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
                {cardData.map((data) => (
                  <div key={data.id} className="projectServicesCard">
                    <h5>Ecommerce website </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="whatWeDo sectionMargin">
            <h2>What We Do </h2>
            <div>
              <p>
                We build better businesses by creating joyful digital ideas,
                products and experiences that connect the hearts of brands to
                the hearts of our consumers.
              </p>
            </div>
          </div>

          <div className="products mt-44 lg:mt-56">
            <div className="productLeftSide ">
              <h2>Products </h2>
              <p className="text-xl">
                We make better products and make products better. From design
                and innovation sprints to UX design sprints and marathons, we
                create things that work for users and brands. Our approach was
                agile before they called it agile, finding innovation through
                structured ideation, prototyping and user-testing. Over the past
                couple of years, we’ve dived deep into machine learning and AI,
                but always with one question in mind: how does it make life
                better for humans?
              </p>
            </div>

            <div className="productRightSide ">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="/animation.json"
              ></lottie-player>
            </div>
          </div>
        </div>
     

      */}

      </Container>
      <BoostSection />
    </div>
  );
};

export default Services;

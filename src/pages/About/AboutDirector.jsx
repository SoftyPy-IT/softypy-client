import { FaStreetView } from "react-icons/fa";
import img from "../../../public/assets/saif.jpeg";
import img2 from "../../../public/assets/team11.jpeg";
import img3 from "../../../public/assets/team9.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "./Director.css";
import Container from "../../ui/Container";
const AboutDirector = () => {
  return (
    <Container>
      <div className="aboutTimeLine">
        <div data-aos="fade-right" className="aboutLeftContainer aboutContainer">
          <span>
            <FaStreetView />
          </span>
          <div>
            <div className="imgWrap">
              <img src={img} alt="director" />
            </div>
          </div>
        </div>
        <div className="aboutRightContainer aboutContainer">
          <div>
            <h2 className="text-3xl font-bold">H M SAIF ALI KHAN</h2>
            <b>Chairman of SoftyPy </b>
            <p>
              My dream is to establish SoftyPy as a centre of excellence in the
              information technology industry by providing state-of-the-art
              solutions to people’s challenges, achieving the trust of our
              customers and setting a benchmark in customer services that will
              lead us to be a global brand in the industry.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="aboutLeftContainer aboutContainer">
          <span>
            <FaStreetView />
          </span>
          <div>
            <div className="imgWrap">
              <img src={img2} alt="director" />
            </div>
          </div>
        </div>
        <div className="aboutRightContainer aboutContainer">
          <div>
            <h2 className="text-3xl font-bold">MD. SHAHIN MIAH</h2>
            <b>Managing Director  </b>
            <p>
              I am so grateful that you have taken the time to consider
              partnering with SOFTYPY PVT. LTD. to serve you. While we are proud
              of our work and the results we will help you achieve … it is the
              relationships we build that will endure. I look forward to working
              closely with you and your team.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="aboutLeftContainer aboutContainer">
          <div>
            <div className="imgWrap">
              <img src={img3} alt="director" />
            </div>
          </div>
        </div>
        <div className="aboutRightContainer aboutContainer">
          <div>
            <h2 className="text-3xl font-bold">NUSUL ISLAM</h2>
            <b>Chief executive officer (CEO) </b>
            <p>
              I am so grateful that you have taken the time to consider
              partnering with SOFTYPY PVT. LTD. to serve you. While we are proud
              of our work and the results we will help you achieve … it is the
              relationships we build that will endure. I look forward to working
              closely with you and your team.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutDirector;

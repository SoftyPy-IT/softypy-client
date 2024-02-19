/* eslint-disable react/no-unknown-property */
import "./About.css";
import team from "../../../public/assets/team6.jpeg";
import team2 from "../../../public/assets/team2.jpg";
import team5 from "../../../public/assets/team5.jpg";
import team6 from "../../../public/assets/team8.jpeg";
import team7 from "../../../public/assets/team10.jpeg";
import team8 from "../../../public/assets/team11.jpeg";
import team9 from "../../../public/assets/team9.jpeg";
import team14 from "../../../public/assets/team13.jpg";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useRef } from "react";
import { useEffect } from "react";
import PortfolioCountdown from "../Home/CountDown/CountDown";
import ManageMent from "./ManageMent/ManageMent";
import NavBar from "../Shared/NavBar/NavBar";
import { Link } from "react-router-dom";
import Subscribe from "../../components/Subscribe/Subscribe";
import AboutDirector from "./AboutDirector";
import Container from "../../ui/Container";
const About = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  
  return (
    <section>
      <div className=" portfolioHeroSection">
        <div className="navsBarWrap">
        <div className="text-white">
        <NavBar />
        </div>

          <div className=" portfolioContent">
            <h3 className="text-3xl md:text-5xl font-bold mb-2">About Us </h3>
            <p className="md:text-xl">
              We are a global IT solutions provider, dedicated to delivering
              cutting-edge technology solutions and exceptional services
              worldwide.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutWrap">
        <div className="sectionMargin">
          <SectionTitle title="STATEMENTS OF OUR HONORABLE MANAGING DIRECTOR"></SectionTitle>
          <AboutDirector />
        </div>
       <div className="sectionMargin">
       <Container>
       <SectionTitle
         title="Our History "
         text='"Mission: Igniting Change. Vision: A Better Future."'
       ></SectionTitle>
       <div className="mission">
         <div className="missionRightSide">
           <div>
             <h3 className="text-5xl font-bold">Mission</h3>
             <p className="mt-3 leading-8">
               SoftyPy is an emerging IT firm in Bangladesh producing
               world-class quality software for its clients since 2018. We
               build customized, interactive, dynamic websites with custom or
               open source back end. Our customized web-based solutions
               include Custom Websites, e-commerce portals, Personal or
               Business portfolios, and management solutions. We also build
               easy-to-use, fast, and beautiful native and non-native mobile
               applications for iOS and Android Devices.
             </p>
           </div>
           <div className="mt-5">
             <h3 className="text-5xl font-bold">Vission </h3>
             <p className="mt-3 leading-8">
               Our vision is to be widely accepted as a brand that provides
               unique, creative, trustworthy and easy-to-use software
               services in the IT industry. We have the vision to lead the
               software industry by solving real-life challenges
               simplistically, and we are working relentlessly to execute our
               plans. We want to go above and beyond the expectations of our
               clients by providing the best solutions for them by making
               them see things differently.
             </p>
           </div>
         </div>
         <div className="missionLeftSide">
           <lottie-player
             id="firstLottie"
             ref={ref}
             autoplay
             loop
             mode="normal"
             src="/vission.json"
             className="animation"
           ></lottie-player>
         </div>
       </div>
     </Container>
       </div>
        <div className="sectionMargin">
        <Container className="team-anim--section">
          <div className="inner">
            <div
              className="basic-title--wrap aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="basic-title ">Meet Our Amazing Team</h2>
              <div className="basic-title--sub">
                <p>
                  {" "}
                  Meet our Visionary Collective, where aspirations are our
                  compass, and success is the destination we chart together. We
                  are not just a team; we are a journey towards greatness.
                </p>
              </div>
            </div>
            <div
              className="team-anim--block aos-init aos-animate"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <div className="team-anim--photo -pos-1 teamWrap">
                <img
                  className="lazy loaded teamImg"
                  src={team2}
                  alt="team"
                  data-was-processed="true"
                />
              </div>
              <div className="team-anim--photo -pos-2">
                <img
                  className="lazy loaded teamImg2"
                  src={team9}
                  alt="team"
                  data-was-processed="true"
                />
              </div>
              <div className="team-anim--photo -pos-3">
                <img
                  className="lazy loaded teamImg3"
                  src={team5}
                  alt="team"
                  data-was-processed="true"
                />
              </div>
              <div className="team-anim--photo -pos-4">
                <img
                  className="lazy loaded teamImg4"
                  src={team14}
                  alt="team"
                  data-was-processed="true"
                />
              </div>
              <div className="team-anim--photo -pos-5">
                <img
                  className="lazy loaded teamImg4"
                  src={team6}
                  alt="team"
                  data-was-processed="true"
                />
              </div>
              <div className="team-anim--photo -pos-6">
                <img
                  className="lazy teamImg5 loaded"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/team-anim-photo-6.png"
                  alt=""
                  src={team7}
                  data-was-processed="true"
                />
              </div>
              <div className="team-anim--photo -pos-6 -back"></div>
              <div className="team-anim--photo -pos-7">
                <img
                  className="lazy loaded teamImg8"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/team-anim-photo-7.jpg"
                  alt="team"
                  src={team8}
                  data-was-processed="true"
                />
              </div>
              <div className="team-anim--photo -pos-8">
                <img
                  className="lazy loaded teamImg9"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/team-anim-photo-8.png"
                  alt=""
                  src={team}
                  data-was-processed="true"
                />
              </div>
              <div className="team-anim--photo -pos-8 -back"></div>
              <div className="team-anim--dec -dec-1"></div>
              <div
                className="team-anim--line aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-offset="400"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="704"
                  height="694"
                  viewBox="0 0 704 694"
                >
                  <path
                    className="team-anim--line-path"
                    fill="none"
                    stroke="#09527d"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M0,197.3c13.8-2,32.9-6.9,49.7-20.7c12.7-10.5,16.2-19.6,38.3-62.3c28.2-54.4,34.7-63.3,43.7-72
		C151.9,22.5,173.2,14.1,179,12c8.9-3.3,55.3-20.5,102.7,4c6.2,3.2,44.9,23.9,56,61.3c2.4,8,2.3,12.6,8,36
		c6.2,25.3,9.3,38,11.7,41.3c18.5,26.4,73.6,21.5,139.3,15.7c20.2-1.8,19.7-2.7,29.3-2.7c8,0,60.2,0.6,102.7,33.3
		c43.4,33.4,53.6,82.5,63.3,129.3c12,57.7,5.1,103.4,3.3,114c-4.3,26.1-17,103.6-81.3,160.7c-38.7,34.3-78.6,45.7-126,59.3
		c-57.5,16.5-108.8,18.4-150.7,20c-13.2,0.5-41.7,1.2-78-0.7c-29.1-1.5-54.9-4.3-76.7-7.3"
                  ></path>
                  <path
                    className="team-anim--line-dashed"
                    fill="none"
                    stroke="#f8f8f8"
                    stroke-width="1"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M0,197.3c13.8-2,32.9-6.9,49.7-20.7c12.7-10.5,16.2-19.6,38.3-62.3c28.2-54.4,34.7-63.3,43.7-72
		C151.9,22.5,173.2,14.1,179,12c8.9-3.3,55.3-20.5,102.7,4c6.2,3.2,44.9,23.9,56,61.3c2.4,8,2.3,12.6,8,36
		c6.2,25.3,9.3,38,11.7,41.3c18.5,26.4,73.6,21.5,139.3,15.7c20.2-1.8,19.7-2.7,29.3-2.7c8,0,60.2,0.6,102.7,33.3
		c43.4,33.4,53.6,82.5,63.3,129.3c12,57.7,5.1,103.4,3.3,114c-4.3,26.1-17,103.6-81.3,160.7c-38.7,34.3-78.6,45.7-126,59.3
		c-57.5,16.5-108.8,18.4-150.7,20c-13.2,0.5-41.7,1.2-78-0.7c-29.1-1.5-54.9-4.3-76.7-7.3"
                  ></path>
                  <circle
                    className="team-anim--dot"
                    cx="178.6"
                    cy="674.7"
                    r="5.1"
                  ></circle>
                </svg>
              </div>
            </div>
            <div className="team-anim--sub">
              <h3 className="team-anim--sub-title">
                Interested in joining us?
              </h3>
              <p>Find out why our team loves SoftyPy!</p>
              <Link to="/contact">
                <div className="btnWrap">
                  <button>Tell Us More!</button>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </Container>
        </div>
        <ManageMent />

        <PortfolioCountdown />
      </div>
      <Subscribe />
    </section>
  );
};

export default About;

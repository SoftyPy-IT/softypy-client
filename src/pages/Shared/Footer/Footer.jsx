import softypy from "../../../../public/assets/logo-softypy.png";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import location from "../../../../public/assets/location.png";
import { Link } from "react-router-dom";
import Container from "../../../ui/Container";
const Footer = () => {
  return (
    <Container>
      <div className="footerWrap sectionMargin">
        <div className="contactUs">
          <div>
            <div className="w-full md:w-56 text-left">
              <img className="object-cover md:w-full w-[150px] mx-auto" src={softypy} alt="softypy" />
              <div className="md:flex flex-col md:flex-row mt-3 items-center hidden ">
                <img className="mr-2" src={location} alt="location" />
                <p className="mt-3">
                  42, Gulshan Avenue, Gulshan-1, Jabbar Tower (6th Floor),
                  Dhaka-1212, Bangladesh
                </p>
              </div>
              <div className="flex  md:flex-row mt-3 items-center">
                <img className="mr-2"  src={location} alt="location" />
                <p className="mt-3">
                  Ka-121, (Besides of IFIC Bank, 2nd floor),Kuril, Vatara, Dhaka
                  -1229
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link to="/services">
              {" "}
              <h3 className="text-xl font-bold text-[#2D57A2] mb-3">
                Services{" "}
              </h3>
            </Link>
            <Link to="/mern">
              {" "}
              <p> Web Development</p>
            </Link>
            <Link to="/wordpress">
              {" "}
              <p> Wordpress Development</p>
            </Link>
            <Link to="/app-development">
              {" "}
              <p>APP Development</p>
            </Link>

            <Link to="/erp">
              {" "}
              <p>ERP Solutions</p>
            </Link>
            <p>UI/UX Design</p>
            <p>Digital Marketing</p>
            <p>SEO</p>
            <Link to="/packages">
              {" "}
              <p>Packages</p>
            </Link>
          </div>
          <div>
            <Link to="/about">
              {" "}
              <h3 className="text-xl font-bold text-[#2D57A2] mb-3">About </h3>
            </Link>
            <Link to="/client">
              <p className="navbar-item">Happy Clients </p>
            </Link>
            <Link to="/about">
              {" "}
              <p>About SoftyPy</p>
            </Link>
            <p>Blog </p>
            <Link to="/faq">
              <p>FAQ </p>
            </Link>
          </div>

          <div>
            <Link to="/contact">
              {" "}
              <h3 className="text-xl font-bold text-[#2D57A2] mb-3">
                Contact{" "}
              </h3>
            </Link>

            <div className="flex">
              <FaPhoneAlt className="text-[#40C7F4] mr-2" size={20} />
              <p> +880 1762-380594</p>
            </div>
            <div className="flex ">
              <FaPhoneAlt className="text-[#40C7F4] mr-2" size={20} />
              <p> +880 1670-405744</p>
            </div>
            <div className="flex ">
              <FaEnvelope className="text-[#40C7F4] mr-2" size={20} />
              <p>softypy@gmail.com</p>
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-bold text-[#40C7F4] mb-3 ">
                Follow Us
              </h3>
              <div className="flex items-center w-[150px] justify-between">
                <Link target="_blank" to="https://www.facebook.com/SoftyPyIT">
                  <div className="socialIcon">
                    <FaFacebook />
                  </div>
                </Link>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/company/softypy/mycompany/verification/"
                >
                  <div className="socialIcon">
                    <FaLinkedin />
                  </div>
                </Link>

                <Link target="_blank" to="https://www.instagram.com/softypyit">
                  <div className="socialIcon">
                    <FaInstagram />
                  </div>
                </Link>
                <Link
                  target="_blank"
                  to="https://www.youtube.com/@softacademybd5392"
                >
                  <div className="socialIcon">
                    <FaYoutube />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="py-3 copyRight flex flex-col md:flex-row justify-center md:justify-between gap-2 items-center ">
          <small className=" sm:mb-5">All Right reserve | @ 2023 - SoftyPy </small>
          <div className="flex gap-2 justify-center flex-wrap items-center md:flex-row flex-col md:justify-between termCondition ">
            <p>Term & Conditions </p>
            <p>Privacy policy </p>
            <p>Cookies </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

import softypy from "../../../../public/assets/logo.png";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";
import location from '../../../../public/assets/location.png'
import { Link } from "react-router-dom";
import Container from "../../../ui/Container";
const Footer = () => {
  return (
   <Container>
   <div className="footerWrap">
   <hr className="my-8" />
   <div className="contactUs">
     <div>
       <div className="w-56 text-left">
         <img className="w-28 h-24 object-cover" src={softypy} alt="softypy" />
         <div className="flex items-center">
           <img className="mr-2" src={location} alt="location" />
           <p className="mt-3">
             42, Gulshan Avenue, Gulshan-1, Jabbar Tower (3rd Floor),
             Dhaka-1212, Bangladesh
           </p>
         </div>
       </div>
     </div>
     <div>
       <Link to='/services'> <h3 className="text-xl font-bold text-[#F81600] mb-3">Services </h3></Link>
       <p>Web & APP Development</p>
       <p>ERP Solutions</p>
       <p>UI/UX Design</p>
       <p>Digital Marketing</p>
       <p>SEO</p>
     </div>
     <div>
       <Link to='/about'> <h3 className="text-xl font-bold text-[#F81600] mb-3">About </h3></Link>
       <Link to="/client">
            <p className="navbar-item">Happy Clients </p>
          </Link>
       <p>About SoftyPy </p>
       <p>Blog </p>
       <Link to='/faq'><p>FAQ </p></Link>
     </div>

     <div>
       <Link to='/contact'> <h3 className="text-xl font-bold text-[#F81600] mb-3">Contact  </h3></Link>

       <div className="flex items-center">
         <FaPhoneAlt />
         <p> +880 1762-380594</p>
       </div>
       <div className="flex items-center">
         <FaPhoneAlt />
         <p> +880 1670-405744</p>
       </div>
       <div className="flex items-center">
         <FaPhoneAlt />
         <p>softypy@gmail.com</p>
       </div>
       <div className="mt-3">
         <h3 className="text-xl font-bold text-[#F81600] mb-3 ">
           Follow Us
         </h3>
         <div className="flex items-center w-[150px] justify-between">
           <div className="socialIcon">
             <FaFacebook />
           </div>
           <div className="socialIcon">
             <FaLinkedin />
           </div>

           <div className="socialIcon twiteer">
             <FaTwitter />
           </div>
           <div className="socialIcon">
             <FaYoutube />
           </div>
         </div>
       </div>
     </div>
   </div>
   <hr className="mt-5" />
   <div className="copyRight py-3">
     <p className="sm:mb-5">All Right reserve | SoftyPy - 2023 </p>
     <div className="termCondition flex items-center justify-between flex-wrap ">
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

import "./NavBar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../../ui/Container";
import { HiChevronDown } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/features/themeSlice";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { FaCode, FaReact, FaShopify, FaWordpressSimple } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { logout } from "../../../redux/features/auth/authSlice";
import Cookies from "js-cookie";

const NavBar = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((store) => store.theme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  const [mobileMenu, setMobileMenu] = useState(true);
  const toggleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
  };
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window?.scrollY > 300);
  });

  const { email } = useSelector((state) => state.auth);
  console.log(email);

  const handleLogout = () => {
    Cookies.remove("softy_user_id")
    dispatch(logout());
  };

  return (
    <Container>
      <div className="navbar">
        <div className=" logo ">
          <Link to="/">
            <h3 className="text-3xl md:text-4xl font-bold">SoftyPy</h3>
          </Link>
        </div>
        <ul className="navbar-list ">
          <Link to="/">
            <li className="navbar-item">Home</li>
          </Link>
          <li className="navbar-item flex items-center serviceNavItems">
            Services <HiChevronDown size={23} />{" "}
            <div className="dropDownMenu">
              <ul className="space-y-3">
                <li className="flex items-center mainSubmenu capitalize">
                  Web Development <HiChevronDown size={23} />
                  <div className="subMenu1 flex items-center justify-between p-8 ">
                    <div className=" menuBox  flex items-center justify-center flex-col">
                      <div className="iconsShapeWrap mb-4 ">
                        <FaCode size={40} />
                      </div>
                      <p>Custom (MERN) </p>
                      <p>Website Development</p>
                    </div>
                    <div className=" menuBox  flex items-center justify-center flex-col">
                      <div className="iconsShapeWrap mb-4 ">
                        <FaWordpressSimple size={40} />
                      </div>
                      <p>Wordpress </p>
                      <p>Development</p>
                    </div>
                    <div className=" menuBox  flex items-center justify-center flex-col">
                      <div className="iconsShapeWrap mb-4">
                        <FaShopify size={40} />
                      </div>
                      <p>Shopify </p>
                      <p>Development</p>
                    </div>

                    {/** 
                    <div className="submenu">
                      <ul>
                        <li>Online Travel Agency (OTA) Website. </li>
                        <li>Corporate Business Website</li>
                        <li>E-commerce Website </li>
                        <li>Nonprofit / Donation Websites </li>
                        <li>Educational Websites </li>
                        <li>Agency Website </li>
                        <li>Real Estate Websites </li>
                        <li>Health and Fitness Websites </li>
                      </ul>
                    </div>
*/}
                  </div>
                </li>
                <li className="mainSubmenu2 flex items-center ">
                  Mobile <HiChevronDown size={23} />
                  <div className="subMenu2 flex items-center justify-between p-8 ">
                    <div className=" menuBox  flex items-center justify-center flex-col">
                      <div className="iconsShapeWrap mb-4 ">
                        <FaMobileScreen size={40} />
                      </div>
                      <p>Flutter </p>
                    </div>

                    <div className=" menuBox  flex items-center justify-center flex-col">
                      <div className="iconsShapeWrap mb-4 ">
                        <FaReact size={40} />
                      </div>
                      <p>React Native </p>
                    </div>
                  </div>
                </li>
                <li>Cloud & DevOps </li>
                <li>UI/UX Design </li>
                <li>Wordpress Development </li>
                <li className="teamHoverMenuItem flex items-center ">
                  Dedicated Team <HiChevronDown size={23} />
                  <div className="teamSubMenu">
                    <ul className="space-y-2">
                      <li>Java Developer</li>
                      <li>Node js Developer</li>
                      <li>.NET Developer</li>
                      <li>React js Developer</li>
                      <li>Angular Developer</li>
                      <li>UI/UX Designer </li>
                    </ul>
                  </div>
                </li>
                <li>QA & Testing</li>
                <li>Technology Consulting</li>
                <li>Support & Maintenance </li>
              </ul>
            </div>
          </li>
          <Link to="/packages">
            {" "}
            <li className="navbar-item">Pricing </li>
          </Link>
          <Link to="/portfolio">
            {" "}
            <li className="navbar-item">Portfolio</li>
          </Link>
          <Link to="/careers">
            {" "}
            <li className="navbar-item">Careers</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="navbar-item">About</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li className="navbar-item">Contact</li>
          </Link>
        </ul>

        <div className="security">
          <div className="flex items-center ">
            <button
              onClick={handleToggleTheme}
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block mr-2 "
            >
              {darkMode ? (
                <HiOutlineSun size={30} />
              ) : (
                <HiOutlineMoon size={30} />
              )}
            </button>
            <div></div>
          </div>

          {email ? (
            <>
              <button className="logoutBtn " onClick={handleLogout}>
                Log Out{" "}
              </button>
            </>
          ) : (
            <button className="logoutBtn  ">
              <NavLink to="/login">Login</NavLink>
            </button>
          )}
        </div>

        <div onClick={toggleMobileMenu} className="bar">
          <div>
            <span className={mobileMenu ? ` ` : `bar1`}></span>
            <span className={mobileMenu ? ` ` : `bar2`}></span>
            <span className={mobileMenu ? ` ` : `bar3`}></span>
          </div>
        </div>
      </div>
      <div></div>
      <ul className={mobileMenu ? `mobileMenu` : `mobileMenuActive`}>
        <Link to="/">
          {" "}
          <li className="navbar-item">Home</li>
        </Link>
        <Link to="/services">
          {" "}
          <li className="navbar-item">Services</li>
        </Link>
        <Link to="/portfolio">
          {" "}
          <li className="navbar-item">Portfolio</li>
        </Link>
        <Link to="/client">
          {" "}
          <li className="navbar-item">Happy Clients </li>
        </Link>
        <Link to="/about">
          {" "}
          <li className="navbar-item">About Us </li>
        </Link>
        <Link to="/contact">
          {" "}
          <li className="navbar-item">Contact Us </li>
        </Link>
        <Link to="/signup">
          <li className="navbar-item">Sign Up </li>
        </Link>
      </ul>
    </Container>
  );
};

export default NavBar;

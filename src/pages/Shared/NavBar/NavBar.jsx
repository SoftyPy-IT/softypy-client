import { useState } from "react";
import { FaCode, FaReact, FaShopify, FaWordpressSimple } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi";
// import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";
import Cookies from "js-cookie";
import logo from "../../../../public/assets/softypy-3.png";
// import { toggleTheme } from "../../../redux/features/themeSlice";
import Container from "../../../ui/Container";
import "./NavBar.css";
import { Button } from "@mui/material";

const NavBar = () => {
  const location = useLocation();

  // Extract the pathname from the location object
  const { pathname } = location;

  // Now you have the current pathname

  const dispatch = useDispatch();
  // const { darkMode } = useSelector((store) => store.theme);
  // const handleToggleTheme = () => {
  //   dispatch(toggleTheme());
  // };
  const [mobileMenu, setMobileMenu] = useState(true);
  const toggleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
  };
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window?.scrollY > 0);
  });

  const { email } = useSelector((state) => state.auth);

  const handleLogout = () => {
    Cookies.remove("softy_user_id");
    dispatch(logout());
  };

  return (
    <Container>
      <div className="navbar flex items-center justify-between">
        <div className=" logo">
          <Link to="/">
            {pathname === "/contact" ? (
              <h3 className="text-3xl md:text-5xl font-semibold mt-2">
                SoftyPy
              </h3>
            ) : (
              <img src={logo} alt="logo" className="w-32 lg:w-40" />
            )}
          </Link>
        </div>
        <ul className="navbar-list ">
          <NavLink to="/">
            <li className="navbar-item">Home</li>
          </NavLink>
          <li className="flex items-center navbar-item serviceNavItems">
            <NavLink to="/services">Services</NavLink>{" "}
            <HiChevronDown size={23} />{" "}
            <div className="dropDownMenu">
              <ul className="space-y-3">
                <li></li>
                <li className="flex items-center capitalize mainSubmenu">
                  Web Development <HiChevronDown size={23} />
           
                    <div className="flex items-center justify-between p-8 subMenu1 ">
                      <Link to='/mern'>
                      <div className="flex flex-col items-center justify-center menuBox">
                        <div className="mb-4 iconsShapeWrap ">
                          <FaCode size={40} />
                        </div>
                        <p>Custom (MERN) </p>
                        <p>Website Development</p>
                      </div>
                      </Link>
                      <Link to='/wordpress'>
                      <div className="flex flex-col items-center justify-center menuBox">
                        <div className="mb-4 iconsShapeWrap ">
                          <FaWordpressSimple size={40} />
                        </div>
                        <p>Wordpress </p>
                        <p>Development</p>
                      </div>
                      </Link>
                      <div className="flex flex-col items-center justify-center menuBox">
                        <div className="mb-4 iconsShapeWrap">
                          <FaShopify size={40} />
                        </div>
                        <p>Shopify </p>
                        <p>Development</p>
                      </div>

                    </div>
                
                </li>
                <li className="flex items-center mainSubmenu2 ">
                  Mobile <HiChevronDown size={23} />
                  <Link to="/app-development">
                    <div className="flex items-center justify-between p-8 subMenu2 ">
                      <div className="flex flex-col items-center justify-center menuBox">
                        <div className="mb-4 iconsShapeWrap ">
                          <FaMobileScreen size={40} />
                        </div>
                        <p>Flutter </p>
                      </div>

                      <div className="flex flex-col items-center justify-center menuBox">
                        <div className="mb-4 iconsShapeWrap ">
                          <FaReact size={40} />
                        </div>
                        <p>React Native </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  {" "}
                  <NavLink to="/erp">ERP Solutions</NavLink>{" "}
                </li>
                <li>Cloud & DevOps </li>
                <li>UI/UX Design </li>
                <li>Wordpress Development </li>
                <li className="flex items-center teamHoverMenuItem relative ">
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
          <NavLink to="/packages">
            {" "}
            <li className="navbar-item">Pricing </li>
          </NavLink>
          <NavLink to="/portfolio">
            {" "}
            <li className="navbar-item">Portfolio</li>
          </NavLink>
          <NavLink to="/careers">
            {" "}
            <li className="navbar-item">Careers</li>
          </NavLink>
          <NavLink to="/about">
            {" "}
            <li className="navbar-item">About</li>
          </NavLink>
          <NavLink to="/contact">
            {" "}
            <li className="navbar-item">Contact</li>
          </NavLink>
        </ul>

        <div className="security">
          {email ? (
            <>
              <Button className="logoutBtn " onClick={handleLogout}>
                Log Out{" "}
              </Button>
            </>
          ) : (
            <Button
              sx={{
                background: "#40C7F4",
                color: "#fff",
                padding: "5px 10px",
                fontSize: "16px",
                fontWeight: "bold",
                width: "80px",
                "&:hover": {
                  background: "#2D57A2",
                },
              }}
            >
              <NavLink to="/login">Login</NavLink>
            </Button>
          )}
        </div>

        <div
          onClick={toggleMobileMenu}
          className={pathname === "/" ? "bar bars" : "bar"}
        >
          <div>
            <span className={mobileMenu ? ` ` : `bar1`}></span>
            <span className={mobileMenu ? ` ` : `bar2`}></span>
            <span className={mobileMenu ? ` ` : `bar3`}></span>
          </div>
        </div>
      </div>
      {/* <ul className={mobileMenu ? `mobileMenu` : `mobileMenuActive`}>
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
        <Link to="/careers">
          {" "}
          <li className="navbar-item">Careers </li>
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
      </ul> */}
      <ul className={mobileMenu ? `mobileMenu` : `mobileMenuActive`}>
        <NavLink to="/">
          <li className="navbar-item">Home</li>
        </NavLink>
        <li className="flex items-center navbar-item serviceNavItems">
          Services <HiChevronDown size={23} />
          <div className="dropDownMenu">
            <ul className="space-y-3">
              <li></li>
              <li className="flex items-center capitalize mainSubmenu">
                Web Development <HiChevronDown size={23} />
                <Link to="/packages">
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between  p-8 subMenu1 ">
                    <div className="flex flex-col items-center justify-center menuBox">
                      <div className="mb-4 iconsShapeWrap ">
                        <FaCode size={40} />
                      </div>
                      <p>Custom (MERN) </p>
                      <p>Website Development</p>
                    </div>
                    <div className="flex flex-col items-center justify-center menuBox">
                      <div className="mb-4 iconsShapeWrap ">
                        <FaWordpressSimple size={40} />
                      </div>
                      <p>Wordpress </p>
                      <p>Development</p>
                    </div>
                    <div className="flex flex-col items-center justify-center menuBox">
                      <div className="mb-4 iconsShapeWrap">
                        <FaShopify size={40} />
                      </div>
                      <p>Shopify </p>
                      <p>Development</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="flex items-center mainSubmenu2 ">
                Mobile <HiChevronDown size={23} />
                <Link to="/app-development">
                  <div className="flex items-center justify-between p-8 subMenu2 ">
                    <div className="flex flex-col items-center justify-center menuBox">
                      <div className="mb-4 iconsShapeWrap ">
                        <FaMobileScreen size={40} />
                      </div>
                      <p>Flutter </p>
                    </div>

                    <div className="flex flex-col items-center justify-center menuBox">
                      <div className="mb-4 iconsShapeWrap ">
                        <FaReact size={40} />
                      </div>
                      <p>React Native </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                {" "}
                <NavLink to="/erp">ERP Solutions</NavLink>{" "}
              </li>
              <li>Cloud & DevOps </li>
              <li>UI/UX Design </li>
              <li>Wordpress Development </li>
              <li className="flex items-center teamHoverMenuItem ">
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
        <NavLink to="/packages">
          {" "}
          <li className="navbar-item">Pricing </li>
        </NavLink>
        <NavLink to="/portfolio">
          {" "}
          <li className="navbar-item">Portfolio</li>
        </NavLink>
        <NavLink to="/careers">
          {" "}
          <li className="navbar-item">Careers</li>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <li className="navbar-item">About</li>
        </NavLink>
        <NavLink to="/contact">
          {" "}
          <li className="navbar-item">Contact</li>
        </NavLink>
      </ul>
    </Container>
  );
};

export default NavBar;

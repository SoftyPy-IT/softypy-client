import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import team from "../../../../public/assets/team11.jpeg";
import login from "../../../../public/assets/login6.png";
import Container from "../../../ui/Container";
const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [mobileMenu, setMobileMenu] = useState(true);
  const toggleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
  };
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window?.scrollY > 300);
  });
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <div className="navbar">
        <div className=" logo">
          <Link to="/">
            <h3 className="text-3xl md:text-4xl font-bold">SoftyPy</h3>
          </Link>
        </div>
        <ul className="navbar-list">
          <Link to="/">
            {" "}
            <li className="navbar-item">Home</li>
          </Link>
          <Link to="/services">
            {" "}
            <li className="navbar-item">Services</li>
          </Link>
          <Link to="/packages">
          {" "}
          <li className="navbar-item">Packages</li>
        </Link>
          <Link to="/portfolio">
            {" "}
            <li className="navbar-item">Portfolio</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="navbar-item">About</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li className="navbar-item">Contact</li>
          </Link>
          <Link to="/client">
          {" "}
          <li className="navbar-item">Happy Clients </li>
        </Link>
        </ul>
        <div className="security">
          {user?.uid ? (
            <>
              <div className="usersWrap">
                <img src={team} className="user" alt="team" />
                <ul className="userItems">
                  <li>
                    <Link to="/dashboard" className=" dasboard">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="mr-3 font-bold dasboard"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="usersWrap">
              <img className="user2" src={login} alt="login" />
                  <ul className="userItems">
                    <li>
                      <Link to="/login" className="mr-3 dasboard">
                        Login{" "}
                      </Link>
                    </li>
                  </ul>
              </div>
            </>
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

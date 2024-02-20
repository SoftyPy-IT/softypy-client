import { Link, Outlet } from "react-router-dom";
import logo from "../../public/assets/logo.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FaPlus } from "react-icons/fa";
const DashboardLayout = () => {
  return (
    <div>
      <div className="drawerflex  dashboardWrap">
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="fixed overflow-y-scroll overflow-x-hidden  drawwerLeftSide h-screen text-lg font-semibold  bg-[#191E2D] text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 ">
            <li>
              <Link to="/" className="shadow-md z-10">
                <img src={logo} className="h-20" />
              </Link>
            </li>

            <li>
              <Link to="/dashboard" className="shadow-md z-10">
                Dashboard
              </Link>
            </li>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Review</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
              <Link to='/dashboard/add-reviews'>  
              <div className="flex items-center text-sm ">
              <FaPlus className="mr-1 "/>
              <span>Add Review</span>
              </div>
              </Link>
                </Typography>
                <Typography>
                <Link to='/dashboard/reviews'>  
                <div className="flex items-center text-sm ">
                <FaPlus className="mr-1 "/>
                <span>All Reviews </span>
                </div>
                </Link>
                  </Typography>
              </AccordionDetails>
            </Accordion>
            <li>
              <Link to="" className="shadow-md">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/serviceData" className="shadow-md">
                Services
              </Link>
            </li>
            <li>
              <Link to="/dashboard/singleServices" className="shadow-md">
                Add Single Services
              </Link>
            </li>
            <li>
              <Link to="/dashboard/about" className="shadow-md">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/dashboard/contact" className="shadow-md">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/dashboard/review" className="shadow-md">
                Review
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="shadow-md">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/dashboard/orders" className="shadow-md">
                Customer Order List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FaPlus, FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiChatBubbleLeft } from "react-icons/hi2";
const Sidebar = () => {
  return (
    <div className="fixed overflow-y-scroll overflow-x-hidden  drawwerLeftSide h-screen text-lg font-semibold  bg-[#191E2D] text-white">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <Link to="/" className="shadow-md z-10">
         <h3 className='text-3xl font-bold m-3'>   SoftyPy</h3>
          </Link>
      <ul className=" p-4 ">
        <li className="mb-3">
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
              <Link to="/dashboard/add-reviews">
                <div className="flex items-center text-sm ">
                  <FaPlus className="mr-1 " />
                  <span>Add Review</span>
                </div>
              </Link>
            </Typography>
            <Typography>
              <Link to="/dashboard/reviews">
                <div className="flex items-center text-sm ">
                  <FaThList className="mr-1 " />
                  <span>All Reviews </span>
                </div>
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Single Services </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mb-2">
              <Typography>
                <Link to="/dashboard/add-singleService">
                  <div className="flex items-center text-sm ">
                    <FaPlus className="mr-1 " />
                    <span>Add Single Services</span>
                  </div>
                </Link>
              </Typography>
            </div>
            <Typography>
              <Link to="/dashboard/SingleServices">
                <div className="flex items-center text-sm ">
                  <FaThList className="mr-1 " />
                  <span>All Single Services </span>
                </div>
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Employee Application</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/dashboard/application">
              <div className="flex items-center text-sm ">
                <FaThList className="mr-1 " />
                <span>Application List </span>
              </div>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography> Services </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mb-2">
              <Typography>
                <Link to="/dashboard/add-singleService">
                  <div className="flex items-center text-sm ">
                    <FaPlus className="mr-1 " />
                    <span>Add Services</span>
                  </div>
                </Link>
              </Typography>
            </div>
            <Typography>
              <Link to="/dashboard/SingleServices">
                <div className="flex items-center text-sm ">
                  <FaThList className="mr-1 " />
                  <span>All Services </span>
                </div>
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography> Portfolio </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mb-2">
              <Typography>
                <Link to="/dashboard/add-portfolio">
                  <div className="flex items-center text-sm ">
                    <FaPlus className="mr-1 " />
                    <span>Add Portfolio </span>
                  </div>
                </Link>
              </Typography>
            </div>
            <Typography>
              <Link to="/dashboard/portfolio-list">
                <div className="flex items-center text-sm ">
                  <FaThList className="mr-1 " />
                  <span>All Portfolio </span>
                </div>
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography> Customer Order </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mb-2"></div>
            <Typography>
              <Link to="/dashboard/orders">
                <div className="flex items-center text-sm ">
                  <FaThList className="mr-1 " />
                  <span>All Customer Order </span>
                </div>
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography> Portfolio </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mb-2">
              <Typography>
                <Link to="/dashboard/add-portfolio">
                  <div className="flex items-center text-sm ">
                    <FaPlus className="mr-1 " />
                    <span>Add Portfolio </span>
                  </div>
                </Link>
              </Typography>
            </div>
            <Typography>
              <Link to="/dashboard/portfolio-list">
                <div className="flex items-center text-sm ">
                  <FaThList className="mr-1 " />
                  <span>All Portfolio </span>
                </div>
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography> Message </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Link to="/dashboard/message-list">
                <div className="flex items-center text-sm ">
                  <HiChatBubbleLeft className="mr-1 " />
                  <span> Message List </span>
                </div>
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography> Users </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/dashboard/users-list">
              <div className="flex items-center text-sm ">
                <HiChatBubbleLeft className="mr-1 " />
                <span>All Users </span>
              </div>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </ul>
    </div>
  );
};

export default Sidebar;

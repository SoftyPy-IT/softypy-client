import { FaTrashAlt, FaEdit, FaArrowRight, FaArrowLeft } from "react-icons/fa";

import img from "../../../../../public/assets/hero.png";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const ViewContact = () => {
    return (
        <div className="mt-5 mb-24 w-full">
        <div className="flex items-center justify-between px-8 mb-5">
          <TextField id="outlined-basic" label="Search " variant="outlined" />
          <div className='addHotel'>
            <Link to='/dashboard/addcontact'>
            <button>
              <span className="text-xl font-bold">+</span> Add Contact Items
            </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className='tableWrap'>
              <tr>
                <th>Image</th>
                <th>About Description </th>
                <th>Title</th>
                <th>Sub title </th>
                <th>Date</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <img
                      className=" h-full w-full object-cover text-center"
                      src={img}
                      alt="img"
                    />
                  </div>
                </td>
                <td>Four Seasons Hotels and Resorts </td>
                <td>This is best hotel in the world </td>
                <td>This is best hotel </td>
                <td>3/6/23</td>
                <td >
                 <div className='editIconWrap'>
                 <Link to='/dashboard/updateContact'> 
                  <FaEdit className='editIcon' />
                 </Link>
                 </div>
                </td>
                <td>
                  <div className='editIconWrap'>
                  <FaTrashAlt className='deleteIcon' />
                  </div>
                  
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
        <div className='pagination'>
            <div className='paginationBtn'>
              <button>
                <FaArrowLeft className='arrowLeft' />
              </button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>
                <FaArrowRight className='arrowRight' />
                
              </button>
            </div>
          </div>
      </div>
    );
};

export default ViewContact;
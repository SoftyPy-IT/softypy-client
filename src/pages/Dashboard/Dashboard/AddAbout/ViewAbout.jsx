import { FaTrashAlt, FaEdit, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './AddAbout.css'
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ViewAbout = () => {
  const { data: aboutItem = [], refetch } = useQuery(['aboutItem'], async () => {
    const res = await fetch('http://localhost:5000/about');
    return res.json()
  })
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/about/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            refetch()
            if (data.deletedCount) {
              Swal.fire(
                'Deleted!',
                'About Item has been deleted.',
                'success'
              )
            }
          })


      }
    })


  }

  return (
    <div className="mt-5 mb-24 w-full">
      <div className="flex items-center justify-between px-8 mb-5">
        <TextField id="outlined-basic" label="Search " variant="outlined" />
        <div className='addHotel'>
          <Link to='/dashboard/addabout'>
            <button>
              <span className="text-xl font-bold">+</span> Add About Content
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
            {
              aboutItem.map(about => <tr key={about._id}>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <img
                      className=" h-full w-full object-cover text-center"
                      src={about.image}
                      alt="img"
                    />
                  </div>
                </td>
                <td>{about.description} </td>
                <td>{about.title}</td>
                <td>{about.subtitle} </td>
                <td>3/6/23</td>
                <td >
                  <div className='editIconWrap'>
                    <Link to={`/dashboard/updateAbout/${about._id}`}>
                      <FaEdit className='editIcon' />
                    </Link>
                  </div>
                </td>
                <td>
                  <div onClick={() => handleDelete(about._id)} className='editIconWrap'>
                    <FaTrashAlt className='deleteIcon' />
                  </div>

                </td>
              </tr>)
            }

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

export default ViewAbout;
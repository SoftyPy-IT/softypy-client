
import { FaTrashAlt, FaEdit, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ServiceData = () => {
  const {data: services = [], refetch} = useQuery(['services'], async ()=>{
    const res = await fetch('https://softypy-server-fzco.vercel.app/services');
    return res.json()
  })



  const handleDelete = id =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this user!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://softypy-server-fzco.vercel.app/services/${id}`,{
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                refetch()
                if(data.deletedCount){
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
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
            <Link to='/dashboard/addservice'>
            <button>
              <span className="text-xl font-bold">+</span> Add Services 
            </button>
            </Link>
          </div>
        </div>
        <h3 className="text-xl text-center mb-3 font-bold">Total Services {services.length}</h3>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className='tableWrap'>
              <tr>
                <th>Image</th>
                <th>Top Service Name</th>
                <th>Title</th>
                <th>Sub title </th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                services.map(service=><tr key={service._id}>
                  <td>
                    <div className="mask   h-[100px] w-[100px] mx-auto ">
                      <img
                        className=" h-full w-full object-cover text-center"
                        src={service.image}
                        alt="img"
                      />
                    </div>
                  </td>
                  <td>{service.title} </td>
                  <td>Web & Mobile App Development </td>
                  <td>{service.subTitle} </td>
                  <td >
                   <div className='editIconWrap'>
                   <Link to={`/dashboard/updatedservice/${service._id}`}> 
                    <FaEdit className='editIcon' />
                   </Link>
                   </div>
                  </td>
                  <td>
                    <div onClick={()=>handleDelete(service._id)} className='editIconWrap'>
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
                <FaLongArrowAltLeft className='arrowLeft' />
              </button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>
                <FaLongArrowAltRight className='arrowRight' />
                
              </button>
            </div>
          </div>
      </div>
    );
};

export default ServiceData;
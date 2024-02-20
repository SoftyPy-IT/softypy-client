
import { FaTrashAlt, FaEdit, FaLongArrowAltLeft, FaLongArrowAltRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDeleteReviewMutation, useGetAllReviewsQuery } from "../../../redux/features/review/reviewApi";

const ReviewList = () => {

  const {data:reviews, isLoading, isError } = useGetAllReviewsQuery()
const [deleteReview ] = useDeleteReviewMutation()


if(isLoading){
  return <p>Loading...........</p>
}
if(isError){
  return <p>Something went to wrong </p>
}

const handleDelete = id =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You want to delete this services !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {

    deleteReview(id)
    if (result.isSuccess) {
      Swal.fire({
        title: "Deleted!",
        text: "Review deleted successfully.",
        icon: "success"
      });
    }
  });
  

}

    return (
        <div className="mt-5 mb-24 w-full">
        
        <h3 className="text-xl text-center mb-3 font-bold">Total Reviews {reviews.length}</h3>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className='tableWrap'>
              <tr>
                <th>SL NO </th>
                <th>Name </th>
                <th>Title</th>
                <th colSpan={3}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                reviews.map((review,i)=><tr key={review._id}>
                  <td>
                   {i+1}
                  </td>
                  <td>{review.name} </td>
                  <td>{review.title}</td>
                  <td>
                    <Link to='/dashboard/add-reviews'>
                    <div className='editIconWrap'>
                    <FaPlus className='deleteIcon' />
                    </div>
                    </Link>
                  
                </td>
                  <td >
                   <div className='editIconWrap'>
                   <Link to={`/dashboard/updatedSingleServices/${review._id}`}> 
                    <FaEdit className='editIcon' />
                   </Link>
                   </div>
                  </td>
                  <td>
                    <div onClick={()=>handleDelete(review._id)} className='editIconWrap'>
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

export default ReviewList;
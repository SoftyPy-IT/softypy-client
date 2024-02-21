import {
  FaTrashAlt,

  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import {useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
} from "../../../redux/features/review/reviewApi";

const ReviewList = () => {
  const navigate = useNavigate();
  const { data: reviews, isLoading, isError } = useGetAllReviewsQuery();
  const [deleteReview] = useDeleteReviewMutation();


  if (isLoading) {
    return <p>Loading...........</p>;
  }
  if (isError) {
    return <p>Something went to wrong </p>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this services !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      deleteReview(id);
      if (result.isSuccess) {
        Swal.fire({
          title: "Deleted!",
          text: "Review deleted successfully.",
          icon: "success",
        });
      }
    });

    navigate("/dashboard/reviews");
  };

  return (
    <div className="mt-5 mb-24 w-full">
      <h3 className="text-xl text-center mb-3 font-bold">
        Total Reviews {reviews.length}
      </h3>
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead className="tableWrap">
            <tr>
              <th>SL NO </th>
              <th>Name </th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, i) => (
              <tr key={review._id}>
                <td>{i + 1}</td>
                <td>{review.name} </td>
                <td>{review.title}</td>
               
                <td>
                  <div
                    onClick={() => handleDelete(review._id)}
                    className="editIconWrap"
                  >
                    <FaTrashAlt className="deleteIcon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <div className="paginationBtn">
          <button>
            <FaLongArrowAltLeft className="arrowLeft" />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>
            <FaLongArrowAltRight className="arrowRight" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;

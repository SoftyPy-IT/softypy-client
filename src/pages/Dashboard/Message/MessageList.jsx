/* eslint-disable no-unused-vars */
import {
  FaTrashAlt,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
} from "../../../redux/features/review/reviewApi";
import { useEffect, useState } from "react";
import DashboardMessageModal from "../../../Layout/DashboardMessageModal";

const MessageList = () => {

  const [open, setOpen] = useState(false);
  const [senderId, setSenderId] = useState("")
  const handleOpen = (value) => {
    setOpen(true)
    setSenderId(value)
  };
  const handleClose = () => setOpen(false);


  const navigate = useNavigate();
  const { data: reviews, isLoading, isError } = useGetAllReviewsQuery();
  const [deleteReview] = useDeleteReviewMutation();

  const [senderData, setSenderData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/message/all")
      .then((res) => res.json())
      .then((data) => setSenderData(data));
  }, []);


 
  
  if (isLoading) {
    return <p>Loading...........</p>;
  }
  if (isError) {
    return <p>Something went to wrong </p>;
  }

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You want to delete this services !",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     deleteReview(id);
  //     if (result.isSuccess) {
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Review deleted successfully.",
  //         icon: "success",
  //       });
  //     }
  //   });

  //   navigate("/dashboard/reviews");
  // };

  const handleDelete = (id) => {
    try {
      fetch(`http://localhost:5000/message/${id}`, {
        method: 'DELETE'
      })
      .then((res) => {
        if (res.ok) {
          console.log("Message deleted successfully");
        } else {
          console.error("Failed to delete message");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  


  return (
    <div className="mt-5 mb-24 w-full">
      <h3 className="text-xl text-center mb-3 font-bold">All Message</h3>
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead className="tableWrap">
            <tr>
              <th>SL NO </th>
              <th>Customer Name </th>
              <th>Email Address</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {senderData?.map((review, i) => (
              <tr key={review._id}>
                <td>{i + 1}</td>
                <td>{review._id} </td>

                <td>{review?.message?.text}</td>
                <td>All message here </td>

                <td>{review.text}</td>
                <td onClick={()=>handleOpen(review.senderId)} className=" cursor-pointer">All message here </td>


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
      {open && <DashboardMessageModal senderId={senderId}/>}
    </div>
  );
};

export default MessageList;

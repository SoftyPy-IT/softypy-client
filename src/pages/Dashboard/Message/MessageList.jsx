/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaTrashAlt,
} from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import DashboardMessageModal from "../../../Layout/DashboardMessageModal";
import {
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
} from "../../../redux/features/review/reviewApi";

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
  console.log(reviews)
  const [deleteReview] = useDeleteReviewMutation();

  const [senderData, setSenderData] = useState([]);

  useEffect(() => {
    fetch("https://softypy-server-fzco.vercel.app/message/all")
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
      fetch(`https://softypy-server-fzco.vercel.app/message/${id}`, {
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
    <div className="w-full mt-5 mb-24">
      <h3 className="mb-3 text-xl font-bold text-center">All Message</h3>
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead className="tableWrap">
            <tr>
              <th>SL NO </th>
              <th>User Id </th>
              <th>Email Address</th>
              <th>Message</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {senderData?.map((review, i) => (
              <tr key={review._id}>
                <td>{i + 1}</td>
                <td>{review._id} </td>

                <td>{review?.message?.text}</td>
               

                <td>{review.text}</td>
                <td onClick={()=>handleOpen(review.senderId)} className="cursor-pointer ">
               
                  <div
                  onClick={() => handleDelete(review._id)}
                  className="editIconWrap"
                >
                  <HiChatAlt2 className="deleteIcon" />
                </div>
                
                </td>


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
      {open && <DashboardMessageModal onClose={handleClose} senderId={senderId}/>}
    </div>
  );
};

export default MessageList;

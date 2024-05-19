import { useState, useEffect } from "react";
import { FaTrashAlt, FaLongArrowAltLeft, FaLongArrowAltRight, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import { useDeleteReviewMutation, useGetAllReviewsQuery } from "../../../redux/features/review/reviewApi";

const ReviewList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  // Fetch reviews data
  const { data } = useGetAllReviewsQuery({
    page,
    limit: 2,
    search: debouncedSearch,
  });

  const [deleteReview] = useDeleteReviewMutation();

  // Update total pages when data changes
  useEffect(() => {
    if (data) {
      setTotalPages(data.pages);
    }
  }, [data]);

  // Handle delete review
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this review!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReview(id)
          .unwrap()
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Review deleted successfully.",
              icon: "success",
            });
          });
      }
    });
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Render pagination buttons
  const renderPaginationButtons = () => {
    return (
      <div className="paginationBtn">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          <FaLongArrowAltLeft className="arrowLeft" />
        </button>
        {[...Array(totalPages).keys()].map((p) => (
          <button key={p + 1} onClick={() => handlePageChange(p + 1)} className={page === p + 1 ? "active" : ""}>
            {p + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          <FaLongArrowAltRight className="arrowRight" />
        </button>
      </div>
    );
  };

  return (
    <div className="mt-5 mb-24 w-full">
      <h3 className="text-xl text-center mb-3 font-bold">Total Reviews {data ? data.total : 0}</h3>
      <TextField
        id="outlined-basic"
        label="Search here"
        sx={{ margin: "20px 10px", width: '300px' }}
        size="small"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="tableWrap">
            <tr>
              <th>SL NO</th>
              <th>Name</th>
              <th>Title</th>
              <th>Image</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.reviews?.map((review, i) => (
              <tr key={review._id}>
                <td>{(page - 1) * 2 + i + 1}</td>
                <td>{review.name}</td>
                <td>{review.title}</td>
                <td>
                  <img className="w-20 h-20 mx-auto rounded-full" src={review.image} alt="review" />
                </td>
                <td>
                  <div className="editIconWrap">
                    <Link to={`/dashboard/update-reviews/${review._id}`}>
                      <FaEdit className="editIcon" />
                    </Link>
                  </div>
                </td>
                <td>
                  <div onClick={() => handleDelete(review._id)} className="editIconWrap">
                    <FaTrashAlt className="deleteIcon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">{renderPaginationButtons()}</div>
    </div>
  );
};

export default ReviewList;

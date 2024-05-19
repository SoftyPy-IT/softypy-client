import { useState, useEffect } from "react";
import {
  FaTrashAlt,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import {
  useDeletePortfolioMutation,
  useGetPortfolioQuery,
} from "../../../redux/features/portfolio/portfolioApi";
import './Portfolio.css'
const PortfolioList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  // Fetch portfolio data
  const { data: portfolioData, isLoading, isError } = useGetPortfolioQuery({
    page,
    limit: 5,
    search: debouncedSearch,
  });

  const [deleteReview] = useDeletePortfolioMutation();

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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !portfolioData) {
    return <p>Error fetching data.</p>;
  }

  return (
    <div className="mt-5 mb-24 w-full">
      <h3 className="text-xl text-center mb-3 font-bold">
        Total Portfolio {portfolioData ? portfolioData.total : 0}
      </h3>
      <TextField
        id="outlined-basic"
        label="Search here"
        sx={{ margin: "20px 10px", width: "300px" }}
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
              <th>Image</th>
              <th>Category</th>
              <th>Title</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData?.portfolio?.map((project, i) => (
              <tr key={project._id}>
                <td>{(page - 1) * 5 + i + 1}</td>
                <td>
                  <img
                    className="w-28 h-32 mx-auto object-cover"
                    src={project.image}
                    alt="review"
                  />
                </td>
                <td>{project.category}</td>
                <td>{project.title}</td>
                <td>
                  <div className="editIconWrap">
                    <Link to={`/dashboard/update-portfolio/${project._id}`}>
                      <FaEdit className="editIcon" />
                    </Link>
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => handleDelete(project._id)}
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
      <div className="pagination">{renderPaginationButtons()}</div>
    </div>
  );

  function renderPaginationButtons() {
    return (
      <div className="paginationBtn">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          <FaLongArrowAltLeft className="arrowLeft" />
        </button>
        {[...Array(portfolioData.totalPages).keys()].map((p) => (
          <button
            key={p + 1}
            onClick={() => handlePageChange(p + 1)}
            className={page === p + 1 ? "active" : ""}
          >
            {p + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === portfolioData.totalPages}
        >
          <FaLongArrowAltRight className="arrowRight" />
        </button>
      </div>
    );
  }
};

export default PortfolioList;

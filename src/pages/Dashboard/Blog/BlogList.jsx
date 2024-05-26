import { useState, useEffect } from "react";
import {
  FaTrashAlt,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Button, Stack, TextField } from "@mui/material";
import { useDeleteBlogMutation, useGetAllBlogQuery } from "../../../redux/features/Blog/blogApi";
import ReactHtmlParser from "react-html-parser"; 

const BlogList = () => {
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
  const { data: blogData, isLoading, isError } = useGetAllBlogQuery({
    page,
    limit: 5,
    search: debouncedSearch,
  });

  const [deleteBlog] = useDeleteBlogMutation();

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
        deleteBlog(id)
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

  if (isError || !blogData) {
    return <p>Error fetching data.</p>;
  }

  // Function to render separate elements for different HTML tags
  const renderContent = (content) => {
    const parsedContent = ReactHtmlParser(content);
  
    return parsedContent.map((element, index) => {
      if (element.type === "h1") {
        return <h1 key={index} className="text-3xl font-bold mb-4 text-center">{element.props.children}</h1>;
      } else if (element.type === "h2") {
        return <h2 key={index} className="text-2xl font-bold mb-3 text-center">{element.props.children}</h2>;
      } else if (element.type === "h3") {
        return <h3 key={index} className="text-xl font-bold mb-2 text-center">{element.props.children}</h3>;
      } else if (element.type === "p") {
        return <p key={index} className="mb-2">{element.props.children}</p>;
      } else if (element.type === "img") {
        return <img key={index} className="w-full h-auto object-cover mb-4" src={element.props.src} alt="Blog Image" />;
      } else if (element.type === "div" && element.props.className === "ql-align-center") {
        return <div key={index} className="text-center mb-2">{element.props.children}</div>;
      } else if (element.type === "div" && element.props.className === "ql-align-right") {
        return <div key={index} className="text-right mb-2">{element.props.children}</div>;
      } else if (element.type === "div" && element.props.className === "ql-align-left") {
        return <div key={index} className="text-left mb-2">{element.props.children}</div>;
      } else {
        return null;
      }
    });
  };
  

  return (
    <div className="mt-5 mb-24 w-full">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0 5px"
      >
        <TextField
          id="outlined-basic"
          label="Search here"
          sx={{ margin: "20px 10px", width: "300px" }}
          size="small"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button component={Link} to="/dashboard/add-portfolio" variant="contained">
          Add Blog
        </Button>
      </Stack>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="tableWrap">
            <tr>
              <th>SL NO</th>
              <th>Content</th>
              <th>Category</th>
              <th>Title</th>
              <th>Priority</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogData?.blog?.map((project, i) => (
              <tr key={project._id}>
                <td>{(page - 1) * 5 + i + 1}</td>
                <td>
                  <div className="w-[300px]">
                    {renderContent(project?.content)}
                  </div>
                </td>
                <td>{project.category}</td>
                <td>{project.title}</td>
                <td>{project.priority}</td>
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
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          <FaLongArrowAltLeft className="arrowLeft" />
        </button>
        {[...Array(blogData.totalPages).keys()].map((p) => (
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
          disabled={page === blogData.totalPages}
        >
          <FaLongArrowAltRight className="arrowRight" />
        </button>
      </div>
    );
  }
};

export default BlogList;

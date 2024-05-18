import { useState } from "react";
import {
  FaTrashAlt,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaEdit,
} from "react-icons/fa";
import Swal from "sweetalert2";
import {
  useDeleteSingleServiceMutation,
  useGetAllSingleServicesQuery,
} from "../../../redux/features/singleServices/singleServicesApi";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const SingleServices = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 3;
  const {
    data: servicesData,
    isLoading,
    isError,
  } = useGetAllSingleServicesQuery({ page, limit });
  const [deleteSingleService] = useDeleteSingleServiceMutation();

  if (isLoading) {
    return <p>Loading...........</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this service!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSingleService(id);
        Swal.fire(
          "Deleted!",
          "Single service deleted successfully.",
          "success"
        );
      }
    });
  };

  const totalPages = Math.ceil(servicesData.total / limit);

  const sortedServices = [...servicesData.services].sort(
    (a, b) => a.priority - b.priority
  );

  // Filter services based on search query
  const filteredServices = sortedServices.filter((service) =>
    Object.values(service).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  

  return (
    <div className="mt-10 mb-24 w-full">
      <h3 className="text-xl text-center mb-3 font-bold">
        Total Services {servicesData.total}
      </h3>
      <TextField
        id="outlined-basic"
        label="Search here"
        sx={{ margin: "20px 10px", width:'300px' }}
        size="small"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="overflow-x-auto">
        {/* Render filtered services */}
        <table className="table">
          <thead className="tableWrap">
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Title</th>
              <th>Sub title</th>
              <th>Image</th>
              <th>Priority</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service, i) => (
              <tr key={service._id}>
                <td>{i + 1 + (page - 1) * limit}</td>
                <td>{service.category}</td>
                <td>{service.title}</td>
                <td>{service.subtitle}</td>
                <td>
                  <img
                    className="w-20 h-20 mx-auto"
                    src={service.image}
                    alt="services"
                  />
                </td>
                
                <td>{service.priority}</td>
                <td>
                  <div className="editIconWrap">
                    <Link
                      to={`/dashboard/updatedSingleServices/${service._id}`}
                    >
                      <FaEdit className="editIcon" />
                    </Link>
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => handleDelete(service._id)}
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
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            <FaLongArrowAltLeft className="arrowLeft" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            <FaLongArrowAltRight className="arrowRight" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;

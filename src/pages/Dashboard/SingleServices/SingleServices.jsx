import {
  FaTrashAlt,
  FaEdit,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteSingleServiceMutation,
  useGetAllSingleServicesQuery,
} from "../../../redux/features/singleServices/singleServicesApi";

const SingleServices = () => {
  const { data: services, isLoading, isError } = useGetAllSingleServicesQuery();
  const [deleteSingleService] = useDeleteSingleServiceMutation();

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
      deleteSingleService(id);
      if (result.isSuccess) {
        Swal.fire({
          title: "Deleted!",
          text: "Single Services deleted successfully.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="mt-10 mb-24 w-full">
      <h3 className="text-xl text-center mb-3 font-bold">
        Total Services {services.length}
      </h3>
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead className="tableWrap">
            <tr>
              <th>Image</th>
              <th>Category </th>
              <th>Title</th>
              <th>Sub title </th>
              <th>Priority</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <tr key={service._id}>
                <td>{i + 1}</td>
                <td>{service.category} </td>
                <td>{service.title}</td>
                <td>{service.subtitle} </td>
                <td>{service.priority} </td>
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

export default SingleServices;

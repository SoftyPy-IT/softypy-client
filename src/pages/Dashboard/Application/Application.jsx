import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaTrashAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";
import {
  useDeleteApplicationMutation,
  useGetApplicationQuery,
} from "../../../redux/features/employee/employeeApi";

const Application = () => {

  const { data: application, isLoading, isError } = useGetApplicationQuery();
  console.log(application);

  const [deleteOrder] = useDeleteApplicationMutation();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this application !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      deleteOrder(id);
      if (result.isSuccess) {
        Swal.fire({
          title: "Deleted!",
          text: "Application deleted successfully.",
          icon: "success",
        });
      }
    });

    // navigate("/dashboard/orders");
  };

  if (isLoading) {
    return <p>Loading........</p>;
  }
  if (isError) {
    return <p>Something went to wrong.</p>;
  }
  return (
    <div className="mt-5 mb-24 w-full">
      <h3 className="text-xl text-center mb-3 font-bold">
        Total Application {application?.length}
      </h3>
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead className="tableWrap">
            <tr>
              <th>Serial No</th>
              <th>Application Name</th>
              <th>Email </th>
              <th>Phone Number </th>
              <th>CV / Resume Link </th>
              <th>LinkedIn Profile Link </th>
              <th>Facebook Profile Link </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {application?.map((order, i) => (
              <tr key={order._id}>
                <td>{i}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.cv} </td>
                <td>{order.linkedIn}</td>
                <td>{order.github}</td>
                <td>
                  <div
                    onClick={() => handleDelete(order._id)}
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

export default Application;

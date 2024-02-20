import {
  FaTrashAlt,
  FaEdit,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDeletePortfolioMutation, useGetPortfolioQuery } from "../../../redux/features/portfolio/portfolioApi";
const PortfolioList = () => {
  const { data: portfolio, isLoading, isError } = useGetPortfolioQuery();
  const [deletePortfolio] = useDeletePortfolioMutation();

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
        deletePortfolio(id);
      if (result.isSuccess) {
        Swal.fire({
          title: "Deleted!",
          text: "Portfolio deleted successfully.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="mt-10 mb-24 w-full">
      <h3 className="text-xl text-center mb-3 font-bold">
        Total Portfolio {portfolio.length}
      </h3>
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead className="tableWrap">
            <tr>
              <th>SL NO </th>
              <th>Image </th>
              <th>Title </th>
              <th>Link</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((data, i) => (
              <tr key={data._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <img
                      className=" h-full w-full object-cover text-center"
                      src={data.image}
                      alt="img"
                    />
                  </div>
                </td>
                <td>{data.title} </td>
                <td>{data.link}</td>
                <td>
                  <div className="editIconWrap">
                    <Link to={`/dashboard/add-portfolio`}>
                      <FaPlus className="editIcon" />
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="editIconWrap">
                    <Link to={`/dashboard/`}>
                      <FaEdit className="editIcon" />
                    </Link>
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => handleDelete(data._id)}
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

export default PortfolioList;

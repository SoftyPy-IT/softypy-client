/* eslint-disable no-unused-vars */
import {
    FaTrashAlt,
    FaLongArrowAltLeft,
    FaLongArrowAltRight,
  } from "react-icons/fa";
import { useAllUsersQuery } from "../../../redux/features/auth/authApi";
  
  const Users = () => {
    const { data: users, isLoading, isError,} = useAllUsersQuery();
console.log(users)

  
    if (isLoading) {
      return <p>Loading...........</p>;
    }
    if (isError) {

      return <p>Something went to wrong </p>;
    }
  
  
    return (
      <div className="mt-5 mb-24 w-full">
        <h3 className="text-xl text-center mb-3 font-bold">All Users {users?.length}</h3>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className="tableWrap">
              <tr>
                <th>SL NO </th>
                <th>User Name </th>
                <th>Email Address</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Users?.data?.data?.map((user, i) => (
                <tr key={user._id}>
                  <td>{i + 1}</td>
                  <td>{user.name} </td>
                  <td>{user.email}</td>
                  <td>All message here </td>
  
                  <td>
                    <div
                    
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
  
  export default Users;
  
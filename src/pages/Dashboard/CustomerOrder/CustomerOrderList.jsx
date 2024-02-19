
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useGetOrdersQuery } from "../../../redux/features/orders/ordersApi";

const CustomerOrderList = () => {
const {data:orders, isLoading, isError} = useGetOrdersQuery()

if(isLoading){
  return <p>Loading........</p>
}
if(isError){
  return <p>Something went to wrong.</p>
}
    return (
        <div className="mt-5 mb-24 w-full">
       
        <h3 className="text-xl text-center mb-3 font-bold">Total Customer {orders.length}</h3>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className='tableWrap'>
              <tr>
                <th>Serial No</th>
                <th>Customer Name</th>
                <th>Email </th>
                <th>Phone Number </th>
              </tr>
            </thead>
            <tbody>
             {
                orders.map((order, i )=> <tr key={order._id}>
                    <td>{i}</td>
                   <td>{order.name}</td>
                   <td>{order.email}</td>
                   <td>{order.phone}</td>
                  </tr>)
             }
            </tbody>
          </table>
        </div>
        <div className='pagination'>
            <div className='paginationBtn'>
              <button>
                <FaLongArrowAltLeft className='arrowLeft' />
              </button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>
                <FaLongArrowAltRight className='arrowRight' />
                
              </button>
            </div>
          </div>
      </div>
    );
};

export default CustomerOrderList;
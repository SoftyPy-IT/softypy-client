import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";


const DashboardLayout = () => {
  return (
    <div>
      <div className="drawerflex  dashboardWrap">
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardLayout;

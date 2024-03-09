import { useState } from "react";
import DashboardMessageModal from "../../../Layout/DashboardMessageModal";
import { IoIosClose } from "react-icons/io";
import { HiChatBubbleLeft } from "react-icons/hi2";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-4xl font-bold ">Dashboard </h2>

        <div className="message rounded-full p-2 fixed bg-[#680C70] text-white bottom-8 right-3 cursor-pointer transition-all duration-75 ">
          {open ? (
            <IoIosClose
              onClick={handleClose}
              size={45}
              className="transition ease-in-out delay-75 "
            />
          ) : (
            <HiChatBubbleLeft
              className="transition ease-in-out delay-75 "
              onClick={handleOpen}
              size={45}
            />
          )}
        </div>
      </div>
      {open && <DashboardMessageModal />}
    </>
  );
};

export default Dashboard;

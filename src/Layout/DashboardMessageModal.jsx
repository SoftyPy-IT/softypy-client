/* eslint-disable no-unused-vars */
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaLink, FaUserTie } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { io } from "socket.io-client";
import DashboardMessage from "../components/Message/DashboardMessage";

const socket = io("ws://localhost:5000");




const DashboardMessageModal = ({ senderId, onClose }) => {
  const [newMessage, setNewMessage] = useState("");

  const [messages, setMessages] = useState([]);
  const [reload, setReload] = useState(false);
  const messageContainerRef = useRef(null);
  const loggedinUser = Cookies.get("softy_user_id");


  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("set-user", loggedinUser);
    });
    const receivedMessageHandler = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    socket.on("received-message", receivedMessageHandler);
    return () => {
      socket.off("received-message", receivedMessageHandler);
    };
  }, [loggedinUser, setMessages]);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const values = {
      text: data.message,
      senderId: loggedinUser,
      receiverId: senderId,
    };

    socket.emit("send-message", values);
    const response = await axios.post("http://localhost:5000/message", values);
    if (response.status === 200) {
      setReload(!reload);
      reset();
    }
  };

  useEffect(() => {
    const getMessage = async () => {
      const response = await axios.get(
        `http://localhost:5000/message?receiverId=${senderId}&senderId=${loggedinUser}`
      );
      if (response.status === 200) {
        setMessages(response.data);
        // Emit socket event after setting messages
        socket.emit("set-user", loggedinUser);
      }
    };
    getMessage();
  }, [loggedinUser, reload, senderId]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-[360px] h-[550px] bg-white fixed right-5 bottom-32  rounded-2xl text-black shadow-xl z-[9999999999] overflow-hidden ">
      <div className="flex flex-col justify-between h-full ">
     
        <div className="bg-[#40C7F4] w-full h-24 text-white flex justify-center items-center relative">
        <button onClick={onClose} className="absolute top-2 right-5"><HiOutlineX size={25}/></button>
          <div className="flex items-center">
            <div className="bg-white p-1 rounded-full text-[#707584] ">
              {" "}
              <FaUserTie size={20} />
            </div>
            <span className="ml-2 text-sm ">
              {/* <ChatOnline /> */}
              {senderId}
            </span>
           
          </div>
        </div>
        <div
          ref={messageContainerRef}
          className="h-[250px] overflow-y-scroll pl-5 pr-3 pb-5"
        >
          <DashboardMessage
            own={messages.some((message) => message.senderId === loggedinUser)}
            messages={messages}
            loggedinUser={loggedinUser}
          />
        </div>

        <div className=" w-full h-24 bg-white flex pl-3  items-center border-t-[#ddd] border-[2px] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start "
          >
            <input
              type="text"
              name=""
              placeholder="Compose your message...."
              className="w-[100%] bg-transparent  h-10 placeholder:text-[14px] "
              {...register("message")}
            />
            <div className=" flex items-center text-[#707584] ">
              <SentimentSatisfiedAltIcon size={15} className="chatIcon" />
              <FaLink size={15} className="chatIcon" />
              <GraphicEqIcon size={15} className="chatIcon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardMessageModal;

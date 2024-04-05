/* eslint-disable no-unused-vars */
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaLink, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import whatsapp from "../../public/assets/whatsapp.png";
import ChatOnline from "../components/ChatOnline/ChatOnline";
import Message from "../components/Message/Message";
import { API_URL } from "../utils/util";

const socket = io("https://softypy-server.vercel.app");

const MessageModal = () => {
  const [messages, setMessages] = useState([]);
  const [reload, setReload] = useState(false);
  const messageContainerRef = useRef(null);

  const receiverId = "65edb8661cddda554c7cf90b";

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("set-user", receiverId);
    });
    const receivedMessageHandler = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    socket.on("received-message", receivedMessageHandler);
    return () => {
      socket.off("received-message", receivedMessageHandler);
    };
  }, [setMessages]);

  const senderId = Cookies.get("temporaryId");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const values = {
      text: data.message,
      senderId: senderId,
      receiverId: receiverId,
    };

    socket.emit("send-message", values);
    const response = await axios.post(`${API_URL}/message`, values);
    if (response.status === 200) {
      setReload(!reload);
      reset();
    }
  };

  useEffect(() => {
    const getMessage = async () => {
      const response = await axios.get(
        `${API_URL}/message?receiverId=${receiverId}&senderId=${senderId}`
      );

      if (response.status === 200) {
        setMessages(response.data);
        socket.emit("set-user", senderId);
      }
    };
    getMessage();
  }, [reload, senderId]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-[300px] md:w-[360px] md:h-[600px] h-[400px]  bg-white fixed right-3 md:right-8 bottom-24  rounded-2xl text-black shadow-xl z-[9999999999] overflow-hidden shadowStyle">
      <div className="flex flex-col justify-between h-full ">
        <div className="bg-[#2D57A2] w-full h-[120px] text-white flex justify-center items-center ">
          <div className="flex items-center">
            <div>
              <div className="flex items-center">
              <div className="bg-white p-1 rounded-full text-[#707584] ">
              {" "}
              <FaUserTie size={20} />
            </div>
            <span className="ml-2 text-sm block">
              <ChatOnline />
            </span>
              </div>
              <div className="flex items-center mt-2  justify-center ">
                <small> Continue with</small>
                <Link
                  to="https://wa.me/8801762380594?text=Hi! how can we help you ?"
                  target="_blank"
                >
                  <button className="whatsApp">
                  
                    <img src={whatsapp} alt="whatsapp" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={messageContainerRef}
          className="h-[250px] overflow-y-scroll pl-5 pr-3 pb-5"
        >
          <Message
            own={messages.some((message) => message.senderId === senderId)}
            messages={messages}
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

export default MessageModal;

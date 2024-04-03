/* eslint-disable no-unused-vars */
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaLink, FaUserTie, FaWhatsapp } from "react-icons/fa";
import { io } from "socket.io-client";
import ChatOnline from "../components/ChatOnline/ChatOnline";
import Message from "../components/Message/Message";
import { CustomChat, FacebookProvider } from "react-facebook";
import { Link } from "react-router-dom";
import whatsapp from "../../public/assets/whatsapp.png";

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
    const response = await axios.post("http://localhost:5000/message", values);
    if (response.status === 200) {
      setReload(!reload);
      reset();
    }
  };

  useEffect(() => {
    const getMessage = async () => {
      const response = await axios.get(
        `http://localhost:5000/message?receiverId=${receiverId}&senderId=${senderId}`
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
    <div className="w-[360px] h-[550px] bg-white fixed right-5 bottom-52  rounded-2xl text-black shadow-xl z-[9999999999] overflow-hidden ">
      <div className="flex flex-col justify-between h-full ">
        <div className="bg-[#40C7F4] w-full h-24 text-white flex justify-center items-center ">
          <div className="flex items-center">
            <div className="bg-white p-1 rounded-full text-[#707584] ">
              {" "}
              <FaUserTie size={20} />
            </div>
            <span className="ml-2 text-sm ">
              <ChatOnline />
            </span>

            <div>
              <FacebookProvider
                className="messengerApp"
                appId="321223840644901"
                chatSupport
              >
                <CustomChat pageId="257323552817721" minimized={true} />
              </FacebookProvider>
            </div>
            <div>
              <Link
                to="https://wa.me/8801762380594?text=Hello how can I help you ?"
                target="_blank"
              >
                <button className="whatsApp">
                  <FaWhatsapp size={30} className="text-white" />
                </button>
              </Link>
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

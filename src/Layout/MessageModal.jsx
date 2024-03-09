/* eslint-disable no-unused-vars */
import { FaLink, FaUserTie } from "react-icons/fa";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Message from "../components/Message/Message";
import ChatOnline from "../components/ChatOnline/ChatOnline";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { io } from "socket.io-client";


const socket = io("http://localhost:5000");

const MessageModal = () => {
  const [conversations, setConversations] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [reload, setReload] = useState(false);
  const messageContainerRef = useRef(null);
  const userTempId = sessionStorage.getItem("temporaryId");




  useEffect(() => {
    socket.on("connect", () => {
      // Connection is established; now emit "set-email"
      socket.emit("set-user", "123456");
    });
    const receivedMessageHandler = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    socket.on("received-message", receivedMessageHandler);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      socket.off("received-message", receivedMessageHandler);
    };
  }, [setMessages]);



  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/conversation/${userTempId}`
        );
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [userTempId]);

  console.log(conversations);

  // useEffect(() => {
  //   const getMessages = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/messages/");
  //       setMessages(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getMessages();
  // }, []);

  const id = sessionStorage.getItem("temporaryId");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const values = {
      text: data.message,
      senderId: id,
      receiverId: "123456",
    };

    const response = await axios.post("http://localhost:5000/message", values);
    if (response.status === 200) {
      setReload(!reload);
      reset()
    }
  };

  useEffect(() => {
    const getMessage = async () => {
      const response = await axios.get(
        `http://localhost:5000/message?receiverId=${"123456"}&senderId=${id}`
      );

      if (response.status === 200) {
        setMessages(response.data);
      }
    };
    getMessage();
  }, [id, reload]);

  console.log(messages);
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-[340px] h-[480px] bg-white fixed right-5 bottom-28 rounded-2xl text-black shadow-sm z-[9999999999] overflow-hidden ">
      <div className="flex flex-col justify-between h-full ">
        <div className="bg-[#680C70] w-full h-24 text-white flex justify-center items-center ">
          <div className="flex items-center">
            <div className="bg-white p-1 rounded-full text-[#707584] ">
              {" "}
              <FaUserTie size={20} />
            </div>
            <span className="ml-2 text-sm ">
              <ChatOnline />
            </span>
          </div>
        </div>
        <div
          ref={messageContainerRef}
          className="h-[250px] overflow-y-scroll pl-5 pr-3 pb-5"
        >
          <Message
            own={messages.some((message) => message.senderId === id)}
            messages={messages}
          />
        </div>

        <div className=" w-full h-24 bg-white flex pl-3  items-center border-t-[#ddd] border-[2px] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-start flex-col "
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

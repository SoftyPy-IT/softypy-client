/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import "./message.css";

export default function Message({ messages }) {
  const senderId = Cookies.get("temporaryId");
  return (
    <div>
      {messages.length > 0 ? (
        <>
          {messages.map((message) => {
            const isSender = message.senderId === senderId;
            return (
              <div key={message._id} className="messageTop ">
                <div
                  className={`flex rounded-md  mt-2 max-w-fit  ${
                    isSender ? "ml-auto lg:w-9/12" : "lg:w-9/12" // Apply ml-auto class for sender's messages
                  }`}
                >
                  <p
                    className={
                      isSender ? "messageTextSender my-2" : "messageText my-2"
                    }
                  >
                    {" "}
                    {message.text}
                  </p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div>Start conversation.</div>
      )}
      {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
    </div>
  );
}

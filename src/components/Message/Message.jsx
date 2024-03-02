/* eslint-disable no-unused-vars */
import "./message.css";

export default function Message({ messages, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      {messages.length > 0 ? (
        <>
          {messages.map((message) => (
            <div key={message._id} className="messageTop">
              <div>
                <img
                  className="messageImg"
                  src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
                  alt=""
                />
              </div>
              <p className="messageText my-2"> {message.text}</p>
            </div>
          ))}
        </>
      ) : (
        <div>Start conversation.</div>
      )}
      {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
    </div>
  );
}

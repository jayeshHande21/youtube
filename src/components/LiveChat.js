import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generate, { generateRandomComment } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();


  const messages = useSelector((store) => store.chat.message);


  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: generateRandomComment(),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div>
      <div className="w-full border border-black ml-3 h-[420px] rounded-lg bg-slate-50 overflow-y-scroll flex flex-col-reverse">
        {messages.map((msg) => (
          <ChatMessage name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Jayesh",
              message: liveMessage,
            })
          );

          setLiveMessage("")
        }}
      >
        <input
          className="border border-black p-1 mt-2 w-[230px] ml-4 rounded-lg"
          placeholder="Enter your comment"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="ml-3 border p-1 rounded-lg">send</button>
      </form>
    </div>
  );
};

export default LiveChat;

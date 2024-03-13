import React from "react";
import { USER_LOGO } from "../utils/constants";

const ChatMessage = ({ name, message }) => {

  return (
    <div className="w-full ml-4 flex items-center pt-4">
      <img
        className="w-5 h-6 rounded-full"
        src={USER_LOGO}
        alt="User Logo"
      />{" "}
      <span className="font-bold mx-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;

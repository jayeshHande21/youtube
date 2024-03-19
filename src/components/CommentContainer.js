import React from "react";
import { USER_LOGO } from "../utils/constants";

const commentsData = [
  {
    name: "User1",
    text: "Great video!",
    comments: [
      {
        name: "User2",
        text: "Thanks! I really enjoyed making it.",
        comments: [
          {
            name: "User1",
            text: "You're talented! Keep it up.",
            comments: [],
          },
        ],
      },
      {
        name: "User3",
        text: "I love this part of the video!",
        comments: [],
      },
    ],
  },
  {
    name: "User4",
    text: "Awesome content!",
    comments: [
      {
        name: "User5",
        text: "Thank you! I appreciate your support.",
        comments: [
          {
            name: "User4",
            text: "Looking forward to more videos from you!",
            comments: [],
          },
        ],
      },
    ],
  },
  {
    name: "User6",
    text: "This is fantastic!",
    comments: [],
  },
  {
    name: "User7",
    text: "I can't stop watching this. Well done!",
    comments: [],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="flex  m-2  bg-gray-100 rounded-lg">
      <img
        className="w-8 h-7"
        src={USER_LOGO}
        alt="User Logo"
      />
      <div className="ml-4"> {data.text}</div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="ml-5  pl-5 border border-l-black ">
        <CommentList comments={comment.comments} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="w-[700px]">
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;

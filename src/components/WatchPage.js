import React from "react";
import { useDispatch } from "react-redux";
import { cancleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  dispatch(cancleMenu());

  return (
    <div className="flex flex-col w-full">
      <div className="flex px-5 w-full">
        <div className="w-3/4">
          <iframe
            className="rounded-lg w-full"
            width="1200"
            height="455"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/4 h-455">
          <LiveChat />
        </div>
      </div>

      <div className="px-5 w-full mt-5">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;

import React from "react";
import { useDispatch } from "react-redux";
import { cancleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

import SuggesationContainer from "./SuggesationContainer";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  
  dispatch(cancleMenu());
  

  return (
    <div className="flex flex-col w-full m-10">
      <div className="flex px-5 w-full items-start">
        <div className="w-full md:w-[735px] h-[430px]">
          <iframe
            className="rounded-lg w-full"
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hidden md:block">
          {/* <LiveChat /> */}
          <SuggesationContainer />
        </div>
      </div>

      <div className="hidden md:block px-5 w-full mt-5">
     {/* <CommentContainer /> */}
      </div>
    </div>
  );
};

export default WatchPage;

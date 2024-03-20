import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../utils/videosSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videosData = useSelector((store) => store.video.videosData);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {

        const data = await fetch(YOUTUBE_VIDEOS_API);
        const response = await data.json();
       
        dispatch(setVideos(response.items));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();

  }, [dispatch]);
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {videosData?.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

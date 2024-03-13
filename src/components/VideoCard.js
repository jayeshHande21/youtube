import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) {
    return null;
  }

  const { thumbnails, title, channelTitle } = info.snippet;

  return (
    <div className="p-1 m-1 ml-5 max-w-xs  cursor-pointer hover:bg-gray-100 shadow-lg">
      <img
        className="w-full rounded-lg"
        src={thumbnails?.medium?.url}
        alt={title}
      />
      <div className="mt-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;

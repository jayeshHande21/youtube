import React from "react";

const VideoCard = ({ info }) => {
   
  if (!info || !info.snippet) {
    return null;

  }

  const { thumbnails, title, channelTitle, publishedAt, statistics } = info.snippet;
  const publishedDate = publishedAt.split("T")[0];

  return (
    <div className="p-1 m-1 ml-3 max-w-xs w-full items-center md:w-87 cursor-pointer bg-black rounded-lg shadow-lg"> {/* Adjusted hover background color to a darker shade */}
      {/* Video thumbnail */}
      <img
        className="w-full rounded-t-lg"
        src={thumbnails?.medium?.url}
        alt={title}
      />
      <div className="p-2">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={thumbnails?.medium?.url}
            alt="Profile"
          />
          <div>
            <h3 className="text-sm font-semibold text-white">{title}</h3> {/* Set text color to white */}
            <p className="text-sm text-gray-400">{channelTitle}</p> {/* Adjusted text color to a lighter shade of gray */}
          </div>
        </div>

        <div className="mt-1 ml-12 flex items-center">
          {/* Video views */}
          <p className="text-xs text-gray-400">{statistics?.viewCount} views</p> {/* Adjusted text color to a lighter shade of gray */}

          {/* Video post time period */}
          <p className="text-xs text-gray-400 pl-3">{publishedDate}</p> {/* Adjusted text color to a lighter shade of gray */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

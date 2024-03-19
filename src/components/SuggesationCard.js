import React from 'react'

const SuggestionCard = ({ info }) => {
 
  if (!info || !info.snippet) {
    return null;
  }

  const { thumbnails, title, channelTitle, publishedAt, statistics } = info.snippet;
  const publishedDate = publishedAt.split("T")[0];

  return (
    <div className="p-1 ml-3 max-w-md cursor-pointer flex hover:bg-gray-800 w-[500px]   shadow-lg"> {/* Adjusted background color and added shadow */}
      <img
        className="w-40 mt-1"
        src={thumbnails?.medium?.url}
        alt={title}
      />
      <div className="flex items-center p-2 ml-2">
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3> {/* Set text color to white */}
          <p className="text-sm text-gray-400">{channelTitle}</p> {/* Adjusted text color to a lighter shade of gray */}
          <div className="flex">
            <p className="text-xs text-gray-400">{statistics?.viewCount} views</p> {/* Adjusted text color to a lighter shade of gray */}
            <p className="text-xs text-gray-400 pl-3">{publishedDate}</p> {/* Adjusted text color to a lighter shade of gray */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;

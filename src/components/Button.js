import React, { useState} from "react";
import { useDispatch } from "react-redux";
import {
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_BY_KEYWORD,
} from "../utils/constants";
import { setLive, setVideos } from "../utils/videosSlice";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';



const Button = () => {
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState("");
  // const isLive = useSelector((store)=>store.video.isLive);
  const buttonList = [
    "All",
    "Live",
    "Gamings",
    "Songs",
    "Sports",
    "Cricket",
    "News",
    "Party",
    "Cooking",
    "Army",
    "Modi",
    "Bollywood",
    "Comedy",
    "Tech",
    "Travel",
    "Fashion ",
    "Health ",
    "Education",
    "Finance ",
    "DIY ",
    "Spiritual"
  ];
  const buttonsPerPage = 10; // Number of buttons to display per page
  const [startIndex, setStartIndex] = useState(0); // Index of the first button to display

  const handleButtonClick = async (word) => {
    try {
      
    if(word==="Live"){
      dispatch(setLive(true));
    }
    else{
      dispatch(setLive(false))
    }
        
      setSelectedButton(word);
      const data = await fetch(
        YOUTUBE_SEARCH_BY_KEYWORD +
        selectedButton +
        "&type=video&key=" +
        GOOGLE_API_KEY
      );
      const response = await data.json();
      dispatch(setVideos(response.items));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = (direction) => {
    if (direction === "left") {
      setStartIndex(Math.max(0, startIndex - buttonsPerPage));
    } else if (direction === "right") {
      setStartIndex(Math.min(buttonList.length - buttonsPerPage, startIndex + buttonsPerPage));
    }
  };

  return (
    <div className="flex items-center">
      {/* Left Scroll Button */}
      <button
        className="scroll-button left bg-white mx-2  h-6"
        onClick={() => handleScroll("left")}
        disabled={startIndex === 0} // Disable the button when at the beginning
      >
        <RiArrowLeftSLine/>
      </button>

      {/* Buttons Container */}
      <div className="flex">
        {buttonList.slice(startIndex, startIndex + buttonsPerPage).map((button, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: button === "Live" ? "red" : "#333",
                color: "#fff",
              }}
              className="w-20 m-2 flex justify-center font-medium items-center rounded-md transition duration-300 hover:bg-gray-500 hover:shadow-md"
            >
              <button
                key={index}
                className="focus:outline-none"
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            </div>
          );
        })}
      </div>

      {/* Right Scroll Button */}
      <button
        className="scroll-button right bg-white mx-2  h-6"
        onClick={() => handleScroll("right")}
        disabled={startIndex + buttonsPerPage >= buttonList.length} // Disable the button when at the end
      >
        <RiArrowRightSLine/>
      </button>
    </div>
  );
};

export default Button;

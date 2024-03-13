import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_BY_KEYWORD } from "../utils/constants";
import { setVideos } from "../utils/videosSlice";


const Button = () => {
  const dispatch = useDispatch()
 const [selectedButton , setSelectedButton] = useState("")
  let buttonList = [
    "All",
    "Gamings",
    "Songs",
    "Live",
    "Sports",
    "Cricket",
    "News",
    "Party",
    "Cooking",
    "Army",
    "Modi",
  
  
  ];

 
  const handleButtonClick = async (word)=>{
    try {
      setSelectedButton(word)
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
    

  }
  return (
    <div className="flex">
      {buttonList.map((button, index) => {
        return (
          <div
            key={index}
            className="w-20  m-2 border flex justify-center hover:bg-gray-200 rounded-md"
          >
            <button key={index}  onClick={()=>handleButtonClick(button)}>{button}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Button;

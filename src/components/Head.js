import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQueryParams, toggleMenu } from "../utils/appSlice";
// import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { MENU_LOGO, USER_LOGO, YOUTUBE_LOGO, YOUTUBE_SEARCH_BY_KEYWORD  , GOOGLE_API_KEY} from "../utils/constants";
import { setVideos } from "../utils/videosSlice";


const Head = () => {
 
  const queryParams = useSelector((store)=>store.app.queryParams)
  const dispatch = useDispatch();
 

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = async ()=>{

    try {
      const data = await fetch( YOUTUBE_SEARCH_BY_KEYWORD +  queryParams + "&type=video&key=" + GOOGLE_API_KEY);
      const response = await data.json();
      // console.log(response.items)
      dispatch(setVideos(response.items));
      setQueryParams("")
    }
    catch (error){
      console.error("Error fetching data:", error);
    }

  }
  
  // const getSearchSuggesations = async () => {
    
  //   // const data = await fetch(YOUTUBE_SEARCH_API + queryParams);
  //   // const response = await data.json();
  //   // console.log(response);
 
  // };

 


  // useEffect(() => {
  //   getSearchSuggesations();
  // }, [queryParams]);
  return (
    <div className="grid grid-cols-12 p-1 m-1 shadow-md">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9 cursor-pointer"
          src= {MENU_LOGO}
          alt="Menu Logo"
        />

        <Link to="/">
          <img
            className="h-6 mx-2 w-60"
            src={YOUTUBE_LOGO}
            alt="Youtube Logo"
          />
        </Link>
      </div>

      <div className="flex col-span-10 justify-center h-8 ">
        <input
          className="w-1/2   p-0 rounded-l-full border border-gray-300"
          type="text"
          placeholder="search here"
          onChange={(e) => dispatch(setQueryParams(e.target.value))}
          value={queryParams}
        />
        <button onClick={()=> handleSearch()} className=" bg-gray-300 rounded-r-full  border border-gray-400 p-2  ">
          🔍
        </button>
      </div>
      <div className="h-8 flex col-span-1">
        <img src={USER_LOGO} alt="User Logo" />
      </div>
    </div>
  );
};

export default Head;

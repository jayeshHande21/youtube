import React from "react";
import { FaHome, FaRegNewspaper, FaRegPlayCircle, FaFire, FaShoppingCart, FaMusic, FaFilm, FaFootballBall, FaHistory, FaQuestionCircle, FaRegCommentAlt, FaGraduationCap } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_BY_KEYWORD } from "../utils/constants";
import { setVideos } from "../utils/videosSlice";

const Sidebar = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  const handleList = async (pass) => {
    try {
      const data = await fetch(
        YOUTUBE_SEARCH_BY_KEYWORD +
        pass +
        "&type=video&key=" +
        GOOGLE_API_KEY
      );
      const response = await data.json();
      dispatch(setVideos(response.items));

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="m-1 p-3  w-max-44 bg-black text-white">
      <div className="mb-4 border-b">
        <h1 className="font-bold text-lg mb-2">Subscriptions</h1>
        <ul>
          <li className="mb-2 flex items-center rounded-lg cursor-pointer p-1   transition duration-300 ">
            <FaHome />
            <Link to="/" className="text-blue-500 ml-2">
              Home
            </Link>
          </li>
          <li onClick={() => handleList("Shorts")} className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 ">
            <FaRegPlayCircle className="mr-2" />
            Shorts
          </li>
          <li onClick={() => handleList("Subscriptions")} className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 ">
            <FaRegNewspaper className="mr-2" />
            Subscriptions
          </li>
        </ul>
      </div>
      <div className="mb-4 border-b">
        <h1 className="font-bold text-lg mb-2">
          Explore
        </h1>
        <ul>
          <li onClick={() => handleList("Trending")} className="mb-2 flex items-center rounded-lg cursor-pointer p-1  hover:opacity-40 "> <FaFire className="mr-2" />Trending</li>
          <li onClick={() => handleList("Shopping")} className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 ">
            <FaShoppingCart className="mr-2" /> Shopping</li>
          <li onClick={() => handleList("Music")} className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 "><FaMusic className="mr-2" />Music</li>
          <li onClick={() => handleList("Films")} className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 "><FaFilm className="mr-2" />Films</li>

          <li onClick={() => handleList("News")} className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 "><FaRegNewspaper className="mr-2" />News</li>
          <li onClick={() => handleList("Gaming")} className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 "><FaFootballBall className="mr-2" />Gaming</li>
          <li onClick={() => handleList("Learning")} className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 "><FaGraduationCap className="mr-2" />Learning</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-lg mb-2">Settings</h1>
        <ul>
          <li className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40  "><FaHistory className="mr-2" />Report History</li>
          <li className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 "><FaQuestionCircle className="mr-2" />Help</li>
          <li className="mb-2 flex items-center rounded-lg cursor-pointer p-1 hover:opacity-40 "><FaRegCommentAlt className="mr-2" />Send Feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

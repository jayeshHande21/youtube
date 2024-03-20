import { useDispatch, useSelector } from "react-redux";
import { setQueryParams, toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { MENU_LOGO, USER_LOGO, YOUTUBE_LOGO, YOUTUBE_SEARCH_BY_KEYWORD, GOOGLE_API_KEY } from "../utils/constants";
import { setVideos } from "../utils/videosSlice";
import debounce from 'lodash.debounce';
import { BiBell } from "react-icons/bi";
import { MdVideocam } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";


const Head = () => {
  const queryParams = useSelector((store) => store.app.queryParams);
  const dispatch = useDispatch();

 

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = debounce(async () => {
    try {
      const data = await fetch(
        YOUTUBE_SEARCH_BY_KEYWORD +
        queryParams +
        "&type=video&key=" +
        GOOGLE_API_KEY
      );
      const response = await data.json();
      dispatch(setVideos(response.items));
      dispatch(setQueryParams(""));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 500);

  return (
    <div className="grid grid-cols-12 p-1 m-1 shadow-md bg-black text-white justify-center">
      <div className="flex col-span-2 items-center ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-5 cursor-pointer mx-2"
          src={MENU_LOGO}
          alt="Menu Logo"
        />


        <Link to="/">
          <img
            className="h-16 w-20"
            src={YOUTUBE_LOGO}
            alt="Youtube Logo"
          />
        </Link>
      </div>

      <div className="flex col-span-9 justify-center h-8 mt-3">
      
         <input
          className="w-1/2 p-4  rounded-l-full   bg-black text-white"
          type="text"
          placeholder="search here"
          onChange={(e) => dispatch(setQueryParams(e.target.value))}
          value={queryParams}
        />
       
        
        <button onClick={() => handleSearch()} className="bg-gray-800 rounded-r-full border border-gray-400 p-2">
          <AiOutlineSearch />
        </button>
      </div>
     
      <div className="flex col-span-1 items-center">
        <div className="flex mr-3">
          <MdVideocam className="w-6 h-9 mr-3 cursor-pointer" />
          <BiBell className="w-6 h-9 cursor-pointer" />
        </div>
        <img src={USER_LOGO} alt="User Logo" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Head;

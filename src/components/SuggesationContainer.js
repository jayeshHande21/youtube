import React, { useEffect  } from 'react'
import { SUGGESTED_VIDEOS } from '../utils/constants';
import { setSuggestedVideos } from '../utils/videosSlice';
import { useDispatch, useSelector } from "react-redux";
import SuggesationCard from './SuggesationCard';
import { Link } from 'react-router-dom';

const SuggesationContainer = () => {
    const dispatch = useDispatch();
    const SuggesationVideos = useSelector((store)=> store.video.suggestedVideos)

    useEffect(() => {
      const getData = async () => {
          try {
              const data = await fetch(SUGGESTED_VIDEOS);
              const response = await data.json();
              dispatch(setSuggestedVideos(response.items));
              
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };
  
      getData();
  }, [dispatch ,SuggesationVideos]);
  
  return (
    <div className="">
        {SuggesationVideos?.map((video , index) => (
              <Link key={index} to={"/watch?v=" + video.id}>
                 <SuggesationCard info={video} />
              </Link>
             ))}
       </div>
  )
}

export default SuggesationContainer

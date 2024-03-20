import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "video",
  initialState: {
    videosData: [],
    suggestedVideos : [],
    isLive : false,
  },
  reducers: {
    setVideos: (state, action) => {
      state.videosData = action.payload;
    },
    setSuggestedVideos : (state, action) =>{
      state.suggestedVideos = action.payload;
    },
    setLive : (state,action)=>{
     
        state.isLive = action.payload
    }
  },
});

export const { setVideos , setSuggestedVideos ,  setLive} = videosSlice.actions;

export default videosSlice.reducer;

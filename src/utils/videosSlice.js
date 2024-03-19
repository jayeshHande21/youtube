import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "video",
  initialState: {
    videosData: [],
    suggestedVideos : []
  },
  reducers: {
    setVideos: (state, action) => {
      state.videosData = action.payload;
    },
    setSuggestedVideos : (state, action) =>{
      state.suggestedVideos = action.payload;
    }
  },
});

export const { setVideos , setSuggestedVideos} = videosSlice.actions;

export default videosSlice.reducer;

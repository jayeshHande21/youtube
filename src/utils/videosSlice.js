import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "video",
  initialState: {
    videosData: [],
  },
  reducers: {
    setVideos: (state, action) => {
      state.videosData = action.payload;
    },
  },
});

export const { setVideos } = videosSlice.actions;

export default videosSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
  reducer: {
    app: appSlice,
    video: videosSlice,
    chat: chatSlice,
    
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(10, 1); // app wont crash cause it removes one message
      state.message.unshift(action.payload); // new messgae adds from front
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;

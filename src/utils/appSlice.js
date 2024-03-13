import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    queryParams : "",
    buttonParams : ""

  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    cancleMenu: (state) => {
      state.isMenuOpen = false;
    },
    setQueryParams : (state , action) =>{
      state.queryParams = action.payload
    },

    setButtonParams : (state,action)=>{
      state.buttonParams = action.payload
    }
  },
});
export const { toggleMenu, cancleMenu , setQueryParams ,setButtonParams} = appSlice.actions;
export default appSlice.reducer;

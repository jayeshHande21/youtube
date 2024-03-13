import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    queryParams : ""
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
    }
  },
});
export const { toggleMenu, cancleMenu , setQueryParams } = appSlice.actions;
export default appSlice.reducer;

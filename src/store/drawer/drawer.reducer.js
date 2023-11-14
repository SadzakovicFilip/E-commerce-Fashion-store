import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: `drawer`,
  initialState: false,
  reducers: {
    setIsDrawerOpen: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsDrawerOpen } = drawerSlice.actions;
export const drawerReducer = drawerSlice.reducer;

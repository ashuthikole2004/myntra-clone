import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItem: (state, action) => {
      // console.log("reducer", store, action);
      return action.payload;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;

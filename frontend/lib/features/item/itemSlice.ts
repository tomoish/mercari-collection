import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    value: [],
  },
  reducers: {
    setItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;

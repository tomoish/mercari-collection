import { createSlice } from "@reduxjs/toolkit";

export const uidSlice = createSlice({
  name: "uid",
  initialState: {
    value: "-1",
  },
  reducers: {
    setUid: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUid } = uidSlice.actions;

export default uidSlice.reducer;

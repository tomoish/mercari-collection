import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
  name: "userName",
  initialState: {
    value: [],
  },
  reducers: {
    setUserName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserName } = userNameSlice.actions;

export default userNameSlice.reducer;

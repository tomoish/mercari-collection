// store.ts
import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./features/item/itemSlice";
import uidReducer from "./features/uid/uidSlice";
import userReducer from "./features/user/userSlice";
import userNameReducer from "./features/userName/userNameSlice";

const store = configureStore({
  reducer: {
    uid: uidReducer,
    userName: userNameReducer,
    user: userReducer,
    item: itemReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/galeryDataSlice";
import wishlistReducer from "./slice/wishlistSlice";
import getUsersDataReducer from "./slice/usersDataSlice";

export const store = configureStore({
  reducer: {
    gallery: getDataReducer,
    wishlist: wishlistReducer,
    users: getUsersDataReducer
  },
});

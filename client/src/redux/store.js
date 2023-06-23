import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/galeryDataSlice";
import wishlistReducer from "./slice/wishlistSlice";

export const store = configureStore({
  reducer: {
    gallery: getDataReducer,
    wishlist: wishlistReducer
  },
});

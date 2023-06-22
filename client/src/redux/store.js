import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/galeryDataSlice";

export const store = configureStore({
  reducer: {
    gallery: getDataReducer
  },
});

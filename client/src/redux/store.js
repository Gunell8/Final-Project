import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/galeryDataSlice";
import wishlistReducer from "./slice/wishlistSlice";
import getUsersDataReducer from "./slice/usersDataSlice";
import cartSlice from "./slice/cartSlice";
import authReducer from "./reducers/auth";

export const store = configureStore({
  reducer: {
    gallery: getDataReducer,
    wishlist: wishlistReducer,
    users: getUsersDataReducer,
    cart:cartSlice,
    auth:authReducer
  },
});

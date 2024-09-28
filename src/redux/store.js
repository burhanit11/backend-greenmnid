import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./userSlices/authUser";
import cartReducer from "./userSlices/cartSlice";
import productReducer from "./userSlices/productSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    cart: cartReducer,
    products: productReducer,
  },
});

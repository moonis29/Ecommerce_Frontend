import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./features/homeSlice";
import CartReducer from "./features/cartSlice";

export const Store = configureStore({
  reducer: {
    home: HomeReducer,
    cart: CartReducer,
  },
});

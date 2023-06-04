import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
      cart: cartSlice,
      // user: UserSlice ---  if can add all slice here if present inside reducer object only
    }
})

export default store;
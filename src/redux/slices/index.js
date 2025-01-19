import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./add-to-cart";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

export default rootReducer;

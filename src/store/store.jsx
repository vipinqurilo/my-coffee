import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/Counter";
import catagoryReducer from "./Api/Catagory";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    catagory:catagoryReducer
  },
});

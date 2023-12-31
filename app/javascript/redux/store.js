import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./reducers/greetingSlice";

const store = configureStore({
  reducer: {
    message: greetingReducer,
  },
});

export default store;
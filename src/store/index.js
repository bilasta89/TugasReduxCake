import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../Components/Cakes/CakeSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;

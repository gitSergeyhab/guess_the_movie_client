import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cinemaApi } from "../api/api";

const reducer = combineReducers({
  [cinemaApi.reducerPath]: cinemaApi.reducer
})


export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(cinemaApi.middleware)
})

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cinemaApi } from "../api/api";
import { userSlice } from "./user-slice/user-slice";
import { testSlice } from "./test-slice/tests-slice";


const reducer = combineReducers({
  [cinemaApi.reducerPath]: cinemaApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [testSlice.name]: testSlice.reducer,
})

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(cinemaApi.middleware)
})

export type ReducerType = ReturnType<typeof reducer>;

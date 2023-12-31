import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cinemaApi } from "../api/api";
import { userSlice } from "./user-slice/user-slice";
import { adminSlice } from "./admin-slice/admin-slice";
import { statsSlice } from "./stats-slice/stats-slice";
import { singlePlayerGameSlice } from "./single-player-game-slice/single-player-game-slice";
import { gameVisualSlice } from "./game-visual-slice/game-visual-slice";


const reducer = combineReducers({
  [cinemaApi.reducerPath]: cinemaApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [adminSlice.name]: adminSlice.reducer,
  [statsSlice.name]: statsSlice.reducer,
  [singlePlayerGameSlice.name]: singlePlayerGameSlice.reducer,
  [gameVisualSlice.name]: gameVisualSlice.reducer,
})

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(cinemaApi.middleware)
})

export type ReducerType = ReturnType<typeof reducer>;

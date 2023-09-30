import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user";
import { loginUser } from "./user-thunk";


interface InitialState {
  user: User | null;
}
const initialState: InitialState = {
  user: null
}

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setUser(state, data: {payload: User|null}) {
      state.user = data.payload;
    }
  },

  extraReducers: (build) => build
    .addCase(loginUser.fulfilled, (state, data) => {
      state.user = data.payload?.user || null;
    })
})


export const {setUser} = userSlice.actions

import { createSlice } from "@reduxjs/toolkit";
import { writeRusTests } from "./admin-thunk";


interface InitialState {
  someData: []
  isTestsUploading: boolean;
  isTestsUploadError: boolean;
}

const initialState: InitialState = {
  someData: [],
  isTestsUploading: false,
  isTestsUploadError: false,
}

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    setData(state, {payload} : {payload: []}) {
      state.someData = payload;
    }

  },
  extraReducers: (build) =>
    build
      .addCase(writeRusTests.pending, (state) => {
        state.isTestsUploading = true;
        state.isTestsUploadError = true;
      })
      .addCase(writeRusTests.rejected, (state) => {
        state.isTestsUploading = false;
        state.isTestsUploadError = true;
      })

      .addCase(writeRusTests.fulfilled, (state) => {
        state.isTestsUploading = false;
        state.isTestsUploadError = false;
      })
})

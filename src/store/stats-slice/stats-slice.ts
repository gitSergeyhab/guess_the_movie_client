import { createSlice } from "@reduxjs/toolkit";
import { fetchDataStats } from "./stats-thunk";
import { DataStat, TestStats } from "../../types/stats";


interface Status {
  isLoading: boolean;
  isError: boolean
}

interface InitialState {
  tests: TestStats[];
  data: DataStat[];
  testsStatsStatus: Status;
  dataStatsStatus: Status;
}


const initialState: InitialState = {
  data: [],
  tests: [],
  testsStatsStatus: {isError: false, isLoading: false},
  dataStatsStatus: {isError: false, isLoading: false},
}


export const statsSlice = createSlice({
  initialState,
  name: 'statsSlice',
  reducers: {
    setTestsStats(state, {payload} : {payload: TestStats[]}) {
      state.tests = payload;
    },

    setDataStats(state, {payload} : {payload: DataStat[]}) {
      state.data = payload;
    }
  },

  extraReducers: (build) => build
    .addCase(fetchDataStats.fulfilled, (state, data) => {
      state.data = data.payload;
      state.dataStatsStatus.isLoading = false;
      state.dataStatsStatus.isError = false;
    })
    .addCase(fetchDataStats.pending, (state) => {
      state.dataStatsStatus.isLoading = true;
      state.dataStatsStatus.isError = false;
    })
    .addCase(fetchDataStats.rejected, (state) => {
      state.dataStatsStatus.isLoading = false;
      state.dataStatsStatus.isError = true;
    })
})

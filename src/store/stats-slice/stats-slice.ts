import { createSlice } from "@reduxjs/toolkit";
import { fetchDataStats, fetchTestStats } from "./stats-thunk";
import { DataStat, TestsStat } from "../../types/stats";


interface Status {
  isLoading: boolean;
  isError: boolean
}

interface InitialState {
  tests: TestsStat[];
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
    setTestsStats(state, {payload} : {payload: TestsStat[]}) {
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

    .addCase(fetchTestStats.fulfilled, (state, data) => {
      state.tests = data.payload;
      state.testsStatsStatus.isLoading = false;
      state.testsStatsStatus.isError = false;
    })
    .addCase(fetchTestStats.pending, (state) => {
      state.testsStatsStatus.isLoading = true;
      state.testsStatsStatus.isError = false;
    })
    .addCase(fetchTestStats.rejected, (state) => {
      state.testsStatsStatus.isLoading = false;
      state.testsStatsStatus.isError = true;
    })
})

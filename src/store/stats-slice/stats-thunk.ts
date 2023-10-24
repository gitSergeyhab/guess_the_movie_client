import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../..";
import { toastErrorMessage } from "../../utils/error-utils";
import { DataStat, TestsStat } from "../../types/stats";

export const fetchDataStats = createAsyncThunk<DataStat[]>(
  'stats/fetchData',
  async () => {
    try {
      const {data} = await api.get<DataStat[]>('/stats/data');
      console.log({data})
      return data;

    } catch (err) {
      console.log({err})
      toastErrorMessage(err);
      return [];
    }

  }
)

export const fetchTestStats = createAsyncThunk<TestsStat[]>(
  'stats/fetchTests',
  async () => {
    try {
      const {data} = await api.get<TestsStat[]>('/stats/tests');
      console.log({data})
      return data;

    } catch (err) {
      console.log({err})
      toastErrorMessage(err);
      return [];
    }

  }
)


import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../..";
import { toastErrorMessage } from "../../utils/error-utils";
import { DataStat } from "../../types/stats";

export const fetchDataStats = createAsyncThunk<DataStat[]>(
  'stats/fetchData',
  async () => {
    try {
      const {data} = await api.get<DataStat[]>('/stats');
      console.log({data})
      return data;

    } catch (err) {
      console.log({err})
      toastErrorMessage(err);
      return [];
    }

  }
)

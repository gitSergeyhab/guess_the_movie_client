import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITest } from "../../types/question-type";
import { api } from "../..";
import { toastErrorMessage } from "../../utils/error-utils";


export const fetchTests = createAsyncThunk<ITest[]>(
  'tests/fetchTests',
  async () => {
    try {
      const {data} = await api.get<ITest[]>('/users');
      console.log({data})
      return data
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return []
    }
  }
)





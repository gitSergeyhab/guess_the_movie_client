import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../..";
import { toastErrorMessage } from "../../utils/error-utils";


const addingTests = {
  writeRusTests: {
    name: 'writeRusTests',
    rout: '/rus/write-tests'
  },

}


const addNewTestsToBD = ({name, rout}: {name: string, rout: string}) => createAsyncThunk<string>(
  `tests/${name}`,
  async () => {
    try {
      const {data} = await api.get<string>(`/tests/${rout}`);
      console.log({data})
      toast.success(data);
      return data;
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return `failed test: "${name}" adding to ${rout}`
    }
  }
)



export const writeRusTests = addNewTestsToBD(addingTests.writeRusTests)

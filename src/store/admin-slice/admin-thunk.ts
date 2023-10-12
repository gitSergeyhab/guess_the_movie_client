import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../..";
import { toastErrorMessage } from "../../utils/error-utils";

import {OperationAction} from '../../const/admin-const'
import { setAdminProcess } from "./admin-slice";
import { Operation } from "../../types/admin-type";




export const writeTests = createAsyncThunk<string, Operation>(
  `tests/write`,
  async ({category}, {dispatch}) => {
    try {
      dispatch(setAdminProcess({
        processAction: OperationAction.Write,
        processCategory: category,
        processContent: null
      }))
      const {data} = await api.post<string>(`/tests`, {}, {params: {category}});
      console.log({data})
      toast.success(data);
      return data;
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return `failed writing test: ${category}`
    }
  }
);

export const deleteTests = createAsyncThunk<null, Operation>(
  `tests/delete`,
  async ({category}, {dispatch}) => {
    try {
      dispatch(setAdminProcess({
        processAction: OperationAction.Delete,
        processCategory: category,
        processContent: null
      }))
      await api.delete<string>(`/tests/${category}`);
      const message = `данные удалены: ${category}`
      console.log({message})
      toast.success(message);
      return null
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return null
    }
  }
)

// export interface writeDataParams {
//   operationCategory: OperationCategory,
//   operationContent: OperationContent
// }

export const writeData = createAsyncThunk<string, Operation>(
  `data/write`,
  async ({category, content}, {dispatch}) => {
    try {
      dispatch(setAdminProcess({
        processAction: OperationAction.Write,
        processCategory: category,
        processContent: content
      }))
      const {data} = await api.post<string>(`/data`, {}, {params: {category, content}});
      console.log({data})
      toast.success(data);
      return data;
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return `failed writing test: ${category}/${category}`
    }
  }
)


export const deleteData = createAsyncThunk<null, Operation>(
  `data/delete`,
  async ({category, content}, {dispatch}) => {
    try {
      dispatch(setAdminProcess({
        processAction: OperationAction.Delete,
        processCategory: category,
        processContent: content
      }))
      await api.delete<string>(`/data/${category}/${content}`);
      const message = `данные удалены: ${category}/${content}`
      console.log({message})
      toast.success(message);
      return null;
    } catch (err) {
      console.error({err}, 'console.error')
      toastErrorMessage(err);
      return null
    }
  }
)


export const readData = createAsyncThunk<string, Operation>(
  `data/read`,
  async ({category, content}) => {
    console.log('rearData')
    try {
      const {data} = await api.get<any, any>(`/data`, {params: {category, content}});
      console.log({data})
      toast.success(data);
      return data;
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return `failed writing test: ${category}/${category}`
    }
  }
)

import { createSlice } from "@reduxjs/toolkit";
import { deleteData, deleteTests, writeData, writeTests } from "./admin-thunk";

import {OperationAction, OperationCategory, OperationContent} from '../../const/admin-const'


interface AdminProcess {
  processAction: OperationAction|null;
  processCategory: OperationCategory|null;
  processContent: OperationContent|null;
}

interface InitialState extends AdminProcess {
  isLoading: boolean;
  isError: boolean;
}

const initialState: InitialState = {
  processAction: null,
  processCategory: null,
  processContent: null,
  isLoading: false,
  isError: false
}


export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    setAdminProcess(state, {payload}: {payload: AdminProcess}) {
      state.processAction = payload.processAction;
      state.processCategory = payload.processCategory;
      state.processContent = payload.processContent;
    }
  },

  extraReducers: (build) =>
    build
      .addCase(writeTests.fulfilled, (state) => {
        state.isError = false;
        state.isLoading = false;
        state.processAction = null;
        state.processCategory = null;
        state.processContent = null;
      })
      .addCase(writeTests.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(writeTests.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        // state.process = null;
      })

      .addCase(writeData.fulfilled, (state) => {
        state.isError = false;
        state.isLoading = false;
        state.processAction = null;
        state.processCategory = null;
        state.processContent = null;
      })
      .addCase(writeData.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(writeData.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        // state.process = null;
      })

      .addCase(deleteTests.fulfilled, (state) => {
        state.isError = false;
        state.isLoading = false;
        state.processAction = null;
        state.processCategory = null;
        state.processContent = null;
      })
      .addCase(deleteTests.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteTests.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        // state.process = null;
      })

      .addCase(deleteData.fulfilled, (state) => {
        state.isError = false;
        state.isLoading = false;
        state.processAction = null;
        state.processCategory = null;
        state.processContent = null;
      })
      .addCase(deleteData.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteData.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        // state.process = null;
      })
})

export const {setAdminProcess} = adminSlice.actions

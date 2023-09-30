import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RegisterFields, LoginFields } from "../../types/field-type";
import { User, UserLoginResponse } from "../../types/user";
import { toastErrorMessage } from "../../utils/error-utils";
import { deleteUserDataFromLS, writeUserDataToLS } from "../../utils/storage-utils";
import { api } from "../..";
import { setUser } from "./user-slice";


interface IRegisterUser {
  body: RegisterFields;
  onError: () => void;
  onSuccess: () => void;
}
export const registerUser = createAsyncThunk<void, IRegisterUser>(
  'users/registration',
  async ({body, onError, onSuccess}) => {
      try {
        const {data} = await api.post<{message: string}>('/users/registration', body);
        toast.success(data.message)
        onSuccess();
      } catch (err) {
        console.error('loginUser Err__________________!', {err})
        toastErrorMessage(err);
        onError();
      }
    }
  )

interface ILoginUser {
  body: LoginFields;
  onError: () => void;
  onSuccess: () => void;
}
export const loginUser = createAsyncThunk<UserLoginResponse|null, ILoginUser>(
  'users/login',
  async ({body, onError, onSuccess}) => {
    try {
      const {data} = await api.post<UserLoginResponse>('/users/login', body);
      toast.success(`вы вошли как: ${data.user.name}`);
      writeUserDataToLS(data);
      onSuccess()
      return data
    } catch (err) {
      console.error('loginUser Err__________________!', {err})
      toastErrorMessage(err);
      deleteUserDataFromLS();
      onError();
      return null
    }
  }
)

export const checkAuthUser = createAsyncThunk<void, {onError: ()=>void}>(
  'users/checkAuth',
  async({onError}, {dispatch}) => {
    try {
      await api.get('/users/auth');
    } catch (err) {
      console.error('checkAuth Err__________________!', {err});
      deleteUserDataFromLS();
      dispatch(setUser(null));
      onError();
    }
  }
)

export const fetchUsers = createAsyncThunk<User[]>(
  'users/getUsers',
  async () => {
    try {
      const {data} = await api.get<User[]>('/users');
      console.log({data})
      return data
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return []
    }
  }
)

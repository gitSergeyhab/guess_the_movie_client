import { toast } from "react-toastify";
import { IError } from "../types/error-type";

export const toastErrorMessage = (err: unknown) => {
  const error = err as IError;
  if (error?.response?.data?.message) {
    toast.error(error.response.data.message);
  } else {
    toast.error('Ошибка Сервера');
  }
  console.error({err}, '!____________toastErrorMessage________________!')
}

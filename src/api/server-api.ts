import axios, { AxiosError } from "axios"
import { toast } from "react-toastify"
import { API_URL } from "../const/const"
import { readTokenFromLS } from "../utils/storage-utils"




export const serverApi = (unauthorize: () => void) => {
  const api = axios.create({
    baseURL: process.env.API_URL || API_URL,
    timeout: 5000,
  })

  api.interceptors.request.use((config) => {
    const token = readTokenFromLS()
    if (config.headers && token) {
      console.log({token})
      config.headers.Authorization = token
    }
    return config;
  })

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        toast.warn('Вы не авторизованны')
        unauthorize();
      }
      return error
      // return Promise.reject(error);
    }
  )

  return api;
}






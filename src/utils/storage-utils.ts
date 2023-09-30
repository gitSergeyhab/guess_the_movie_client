import { User, UserLoginResponse } from "../types/user"


const STORAGE_TOKEN_KEY = 'MOVIES_STORAGE_TOKEN_KEY';
const STORAGE_USER_KEY = 'MOVIES_STORAGE_USER_KEY'

export const writeUserDataToLS = (userData: UserLoginResponse) => {
  const {token, user} = userData;
  const userString = JSON.stringify(user);
  localStorage.setItem(STORAGE_TOKEN_KEY, token);
  localStorage.setItem(STORAGE_USER_KEY, userString);
}

export const readUserFromLS = () => {
 const user = localStorage.getItem(STORAGE_USER_KEY);
 if(!user) {
  return null;
 }
 return JSON.parse(user) as User;
}

export const readTokenFromLS = () => localStorage.getItem(STORAGE_TOKEN_KEY);

export const deleteUserDataFromLS = () => {
  localStorage.removeItem(STORAGE_TOKEN_KEY);
  localStorage.removeItem(STORAGE_USER_KEY);
}

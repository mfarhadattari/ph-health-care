import { authKey } from "@/const/authKey";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { TAuthPayload } from "@/types";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";

export const storeUserInfo = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const token = getFromLocalStorage(authKey);
  if (token) {
    const user = decodedToken<TAuthPayload>(token);
    return user;
  }
};

export const isLoggedIn = (): boolean => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return true;
  } else {
    return false;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_SERVER_BASE_API}/auth/refresh-token`,
    method: 'GET',
    withCredentials: true,
  });
}

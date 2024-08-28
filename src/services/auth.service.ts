import { authKey } from "@/const/authKey";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";

enum UserRole {
  "SUPER_ADMIN",
  "ADMIN",
  "DOCTOR",
  "PATIENT",
}

export type TAuthPayload = {
  userId: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
};

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

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

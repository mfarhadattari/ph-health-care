import { jwtDecode } from "jwt-decode";

export const decodedToken = <T>(token: string): T => {
  return jwtDecode<T>(token);
};

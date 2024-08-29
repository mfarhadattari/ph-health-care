import { authKey } from "@/const/authKey";
import { TResponseError, TResponseSuccess } from "@/types";
import { getFromLocalStorage } from "@/utils/localStorage";
import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(
  function (config) {
    // set  access token into req headers
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseData: TResponseSuccess = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseData;
  },
  function (error) {
    const errorData: TResponseError = {
      statusCode: error?.response?.data?.statusCode,
      message: error?.response?.data?.message,
      errorMessage: error?.response?.data?.message,
    };
    return errorData;
  }
);

export default axiosInstance;

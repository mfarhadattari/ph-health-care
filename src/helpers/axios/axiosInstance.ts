import { authKey } from "@/const/authKey";
import { getNewAccessToken, storeUserInfo } from "@/services/auth.service";
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
      data: response?.data?.data || null,
      meta: response?.data?.meta,
    };
    return responseData;
  },
  async function (error) {
    const config = error.config;
    if (error?.response?.status === 401) {
      const response = await getNewAccessToken();
      const accessToken = response?.data?.accessToken;
      config.headers['Authorization'] = accessToken;
      storeUserInfo(accessToken);
      return axiosInstance(config);
    } else {
      const errorData: TResponseError = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong.",
        errorMessage: error?.response?.data?.message || null,
      };
      return errorData;
    }
  }
);

export default axiosInstance;

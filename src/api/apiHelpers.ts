import { SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Notify } from "notiflix";

const VITE_BACKEND_BASE_URL: string = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      try {
        const { data } = await axios.post("api/auth/refresh", { refreshToken });
        setAuthHeader(data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        return axios(error.config);
      } catch (error) {
        const axiosError = error as AxiosError<SerializedError>;
        if (axiosError.response?.status === 403) {
          Notify.failure("Session timeout. Login again");
        }

        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

import { SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Notify } from "notiflix";

const VITE_BACKEND_BASE_URL: string = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

const handleLogOut = () => {
  var modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "block";
  }
};

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      error.config._isRetry = true;
      const refreshToken = localStorage.getItem("refreshToken");

      try {
        const { data } = await axios.post("api/auth/refresh", {
          refreshToken,
        });

        // setAuthHeader(data.accessToken);
        error.config.headers.common.authorization = `Bearer ${data.accessToken}`;
        localStorage.setItem("refreshToken", data.refreshToken);
        return axios(error.config);
      } catch (error) {
        const axiosError = error as AxiosError<SerializedError>;
        if (axiosError.response?.status === 403) {
          handleLogOut();
          Notify.failure("Session timeout. Login again");
        }

        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

// };
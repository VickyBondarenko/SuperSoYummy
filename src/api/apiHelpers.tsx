import { SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const VITE_BACKEND_BASE_URL: string = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

const handleLogOut = () => {
  const modal = document.getElementById("logOutModal");
  if (modal) {
    modal.style.display = "block";
    document.body.classList.add("overflow-hidden");
  }
};

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

let isRefreshing = false;
const refreshQueue: any = [];

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      error.config._isRetry = true;
      const abortController = new AbortController();
      const signal = abortController.signal;

      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshQueue.push(() => {
            resolve(axios(error.config));
          });
        });
      }

      isRefreshing = true;

      try {
        await axios.post("api/auth/refresh", {
          signal: signal,
        });

        refreshQueue.forEach((resolve: () => void) => {
          abortController.abort();
          resolve();
        });
        refreshQueue.length = 0;

        isRefreshing = false;

        return axios(error.config);
      } catch (error) {
        isRefreshing = false;
        const axiosError = error as AxiosError<SerializedError>;
        if (axiosError.response?.status === 403) {
          handleLogOut();
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

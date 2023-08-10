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
  console.log("setToken before", token);
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
        const { data } = await axios.post(
          "api/auth/refresh",
          {
            refreshToken: localStorage.getItem("refreshToken"),
          },
          {
            signal: signal,
          }
        );

        setAuthHeader(data.accessToken);
        localStorage.removeItem("refreshToken");
        localStorage.setItem("refreshToken", data.refreshToken);

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
          Notify.failure("Session timeout. Login again");
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       error.config._isRetry = true;
//       const refreshToken = localStorage.getItem("refreshToken");
//       // console.log("refreshToken on reload:", refreshToken);
//       if (refreshToken) {
//         try {
//           const { data } = await axios.post("api/auth/refresh", {
//             refreshToken,
//           });

//           setAuthHeader(data.accessToken);
//           // console.log("dataInterceptor", data);
//           // error.config.headers.common.authorization = `Bearer ${data.accessToken}`;
//           localStorage.removeItem("refreshToken");
//           localStorage.setItem("refreshToken", data.refreshToken);
//           return axios(error.config);
//         } catch (error) {
//           const axiosError = error as AxiosError<SerializedError>;
//           if (axiosError.response?.status === 403) {
//             handleLogOut();
//             Notify.failure("Session timeout. Login again");
//           }
//           return Promise.reject(error);
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

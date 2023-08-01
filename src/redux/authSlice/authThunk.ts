import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { clearAuthHeader, setAuthHeader } from "../../api/apiHelpers";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const VITE_BACKEND_BASE_URL: string = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

import { IAppState, IAuthRespons, IFormValues } from "../../types/authTypes";

export const registerUser = createAsyncThunk<
  IAuthRespons,
  IFormValues,
  { rejectValue: string }
>(`/api/auth/register`, async (userData, { rejectWithValue }) => {
  try {
    const {
      data: { user, accessToken, refreshToken },
    } = await axios.post<IAuthRespons>(`/api/auth/register`, userData);
    setAuthHeader(accessToken);
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }

    return { user, accessToken };
  } catch (error) {
    const axiosError = error as AxiosError<SerializedError>;
    if (axiosError.response?.status === 409) {
      Notify.failure("User is already registered");
    }
    return rejectWithValue("Error");
  }
});

export const loginUser = createAsyncThunk<
  IAuthRespons,
  IFormValues,
  { rejectValue: string }
>(`/api/auth/login`, async (userData, { rejectWithValue }) => {
  try {
    const {
      data: { user, accessToken, refreshToken },
    } = await axios.post(`/api/auth/login`, userData);

    setAuthHeader(accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return { user, accessToken };
  } catch (error) {
    Notify.failure("Incorect email or password");
    return rejectWithValue("Error");
  }
});

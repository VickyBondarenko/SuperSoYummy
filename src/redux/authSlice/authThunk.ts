import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const VITE_BACKEND_BASE_URL: string = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

import { RegisterRespons, FormValues } from "../../types/authTypes";

export const registerUser = createAsyncThunk<
  RegisterRespons,
  FormValues,
  { rejectValue: string }
>(`/api/auth/register`, async (userData, { rejectWithValue }) => {
  try {
    const {
      data: { user, token },
    } = await axios.post<RegisterRespons>(`/api/auth/register`, userData);
    return { user, token };
  } catch (error) {
    const axiosError = error as AxiosError<SerializedError>;
    if (axiosError.response?.status === 409) {
      Notify.failure("User is already registered");
    }
    return rejectWithValue("Error");
  }
});

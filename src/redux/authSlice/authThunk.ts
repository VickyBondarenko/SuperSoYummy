import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const VITE_BACKEND_BASE_URL: string = import.meta.env.VITE_BACKEND_BASE_URL;
(axios.defaults.baseURL = VITE_BACKEND_BASE_URL),
  (axios.defaults.withCredentials = true);

import {
  IAuthRespons,
  IFormValues,
  IUserResponsData,
  IAppState,
  IAsyncThunkCurrentUserReturn,
  IUserEdition,
} from "../../types/authTypes";

export const registerUser = createAsyncThunk<
  IAuthRespons,
  IFormValues,
  { rejectValue: string }
>(`/api/auth/register`, async (userData, { rejectWithValue }) => {
  try {
    const {
      headers,
      data: { user },
    } = await axios.post<IAuthRespons>(`/api/auth/register`, userData);

    const accessToken = headers["x-has-accesstoken"] === "true";
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
      headers,
      data: { user },
    } = await axios.post(`/api/auth/login`, userData);

    const accessToken = headers["x-has-accesstoken"] === "true";

    return { user, accessToken };
  } catch (error) {
    Notify.failure("Incorect email or password");
    return rejectWithValue("Error");
  }
});

export const getCurrentUser = createAsyncThunk<
  IAsyncThunkCurrentUserReturn,
  void,
  { rejectValue: string; state: IAppState }
>("auth/current", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<IUserResponsData>("/api/auth/current");
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      Notify.warning("Unauthorized");
      return { to: "/signin" };
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const logoutUser = createAsyncThunk<
  void,
  string,
  { rejectValue: string; state: IAppState }
>("auth/logout", async (_id, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/api/auth/logout`, { _id });
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const editUser = createAsyncThunk<
  IUserEdition,
  IUserEdition,
  { rejectValue: string }
>("auth/edit", async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(`/api/auth/edit`, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error: any) {
    if (error.response.data.message === '"name" is not allowed to be empty') {
      Notify.failure("Please enter the name");
    }
    return rejectWithValue(error.message);
  }
});

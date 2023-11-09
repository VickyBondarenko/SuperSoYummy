import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { setAuthHeader, clearAuthHeader } from "../../api/apiHelpers";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const VITE_BACKEND_BASE_URL: string = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

import {
  IAuthRespons,
  IFormValues,
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
      data: { user, accessToken, refreshToken },
    } = await axios.post<IAuthRespons>(`/api/auth/register`, userData);
    setAuthHeader(accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return { user, accessToken, refreshToken };
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
    return { user, accessToken, refreshToken };
  } catch (error) {
    Notify.failure("Incorect email or password");
    return rejectWithValue("Error");
  }
});

export const getCurrentUser = createAsyncThunk<
  IAsyncThunkCurrentUserReturn,
  void,
  { rejectValue: string; state: IAppState }
>("auth/current", async (_, { rejectWithValue, getState }) => {
  const { accessToken } = getState().auth;

  if (!accessToken) {
    return rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(accessToken);
    const { data } = await axios.get("/api/auth/current", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      clearAuthHeader();
      Notify.warning("Unauthorized");
    }
    return rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk<
  void,
  string,
  { rejectValue: string; state: IAppState }
>("auth/logout", async (_id, { rejectWithValue }) => {
  // const { accessToken } = getState().auth;
  // if (!accessToken) {
  //   return rejectWithValue("Token is null");
  // }
  try {
    // setAuthHeader(accessToken);
    const { data } = await axios.post(`/api/auth/logout`, { _id });
    clearAuthHeader();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const editUser = createAsyncThunk<
  IUserEdition,
  FormData,
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

import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../../types/authTypes";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  editUser,
} from "./authThunk";

const AUTH_REDUCER = "AUTH_REDUCER";

const authInitialState: IAuthState = {
  user: {
    _id: "",
    name: "",
    avatarURL: "",
    email: "",
  },
  refreshToken: "",
  accessToken: null,
  isLoading: false,
  isRefreshing: false,
  isEditModalOpen: false,
  error: null,
};

const authSlice = createSlice({
  name: AUTH_REDUCER,
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(logoutUser.fulfilled, (state, _) => {
        state.user = {
          _id: "",
          name: "",
          avatarURL: "",
          email: "",
        };
        state.accessToken = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(getCurrentUser.rejected, (state, _) => {
        state.accessToken = null;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user.name = action.payload.data.name;
        state.user.avatarURL = action.payload.data.avatarURL;
      })
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/rejected"),
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/fulfilled"),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      );
  },
});

export default authSlice.reducer;

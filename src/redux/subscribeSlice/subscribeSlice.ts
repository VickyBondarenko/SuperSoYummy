import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { ISubState } from "../../types/subscribeTypes";

const SUBSCRIBE_REDUCER = "SUBSCRIBE_REDUCER";

const subInitialState: ISubState = {
  isLoading: false,
  error: null,
};

const subscribeSlice = createSlice({
  name: SUBSCRIBE_REDUCER,
  initialState: subInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/rejected"),
        (state, action: PayloadAction<string>) => {
          state.error = action.payload;
          state.isLoading = false;
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

export default subscribeSlice.reducer;

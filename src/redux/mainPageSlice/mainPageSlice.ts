import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { fetchMainPageRecipes } from "./mainPageThunk";

import { IMainPageState } from "../../types/mainPageTypes";

const MAIN_PAGE_REDUCER = "MAIN_PAGE_REDUCER";

const mainPageInitState: IMainPageState = {
  mainPageRecipes: [],
  isLoading: false,
  error: null,
};

const mainPageSlice = createSlice({
  name: MAIN_PAGE_REDUCER,
  initialState: mainPageInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainPageRecipes.fulfilled, (state, action) => {
        state.mainPageRecipes = action.payload;
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

export default mainPageSlice.reducer;

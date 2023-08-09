import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { IPopularRecipesState } from "../../types/popularTypes";
import { fetchPopularRecipes } from "./popularThunk";

const POPULAR_REDUCER = "POPULAR_REDUCER";

const catInitialState: IPopularRecipesState = {
  popularRecipes: [],
  isLoading: true,
  error: null,
};

const popularSlice = createSlice({
  name: POPULAR_REDUCER,
  initialState: catInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularRecipes.fulfilled, (state, action) => {
        state.popularRecipes = action.payload;
      })
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

export default popularSlice.reducer;

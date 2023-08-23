import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { fetchOwnRecipes } from "./ownRecipeThunk";

import { IRecipeListState } from "../../types/recipeListTypes";

const OWN_RECIPE_REDUCER = "OWN_RECIPE_REDUCER";

const ownRecipeInitState: IRecipeListState = {
  metaData: {
    totalHits: 0,
    currentPage: 1,
    totalPages: 1,
  },
  ownRecipe: null,
  recipeList: [],
  isLoading: false,
  error: null,
};

const ownRecipeSlice = createSlice({
  name: OWN_RECIPE_REDUCER,
  initialState: ownRecipeInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOwnRecipes.fulfilled, (state, action) => {
        state.recipeList = action.payload.data;
        state.metaData = action.payload.metaData;
        state.isLoading = true;
      })
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/pending"),
        (state) => {
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

export default ownRecipeSlice.reducer;

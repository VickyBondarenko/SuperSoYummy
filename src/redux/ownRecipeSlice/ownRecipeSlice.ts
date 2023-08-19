import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { fetchOwnRecipes, fetchOwnRecipeById } from "./ownRecipeThunk";

import { IOwnRecipesState } from "../../types/ownRecipeTypes";

const OWN_RECIPE_REDUCER = "OWN_RECIPE_REDUCER";

const ownRecipeInitState: IOwnRecipesState = {
  totalPages: 0,
  ownRecipe: null,
  ownRecipes: [],
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
        state.ownRecipes = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchOwnRecipeById.fulfilled, (state, action) => {
        state.ownRecipe = action.payload;
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

export default ownRecipeSlice.reducer;

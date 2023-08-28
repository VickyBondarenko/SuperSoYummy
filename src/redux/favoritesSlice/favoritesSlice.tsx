import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { fetchFavoriteRecipes } from "./favoritesThunk";

import { IRecipeListState } from "../../types/recipeListTypes";

const FAVORITES_REDUCER = "FAVORITES_REDUCER";

const favoritesInitState: IRecipeListState = {
  metaData: {
    totalHits: 0,
    currentPage: 1,
    totalPages: 1,
  },
  recipeList: [],
  isLoading: false,
  error: null,
};

const favoriteRecipesSlice = createSlice({
  name: FAVORITES_REDUCER,
  initialState: favoritesInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteRecipes.fulfilled, (state, action) => {
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

export default favoriteRecipesSlice.reducer;

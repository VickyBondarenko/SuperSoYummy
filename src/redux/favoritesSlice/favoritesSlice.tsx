import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { fetchFavoriteRecipes } from "./favoritesThunk";

import { IFavoritesState } from "../../types/favoritesTypes";

const FAVORITES_REDUCER = "FAVORITES_REDUCER";

const favoritesInitState: IFavoritesState = {
  totalPages: 0,
  favoriteRecipes: [],
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
        state.favoriteRecipes = action.payload.data;
        state.totalPages = action.payload.totalPages;
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

export default favoriteRecipesSlice.reducer;

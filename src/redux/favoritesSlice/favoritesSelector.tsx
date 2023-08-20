import { RootState } from "../store";
export const selectIsLoading = (state: RootState) => state.favorites.isLoading;

export const selectFavoriteRecipes = (state: RootState) =>
  state.favorites.favoriteRecipes;

export const selectFavoriteRecipesTotalPages = (state: RootState) =>
  state.favorites.totalPages;

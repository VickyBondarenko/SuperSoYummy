import { RootState } from "../store";
export const selectIsLoading = (state: RootState) => state.ownRecipe.isLoading;

export const selectFavoriteRecipes = (state: RootState) =>
  state.favorites.favoriteRecipes;

export const selectFavoriteRecipesTotalPages = (state: RootState) =>
  state.favorites.totalPages;

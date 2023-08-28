import { RootState } from "../store";
export const selectIsLoading = (state: RootState) => state.favorites.isLoading;

export const selectFavoriteRecipes = (state: RootState) =>
  state.favorites.recipeList;

export const selectFavoriteRecipesMetaData = (state: RootState) =>
  state.favorites.metaData;

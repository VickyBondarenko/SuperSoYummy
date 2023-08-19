import { RootState } from "../store";
export const selectIsLoading = (state: RootState) => state.ownRecipe.isLoading;

export const selectOwnRecipes = (state: RootState) =>
  state.ownRecipe.ownRecipes;

export const selectOwnRecipeById = (state: RootState) =>
  state.ownRecipe.ownRecipe;

export const selectOwnRecipesTotalPages = (state: RootState) =>
  state.ownRecipe.totalPages;

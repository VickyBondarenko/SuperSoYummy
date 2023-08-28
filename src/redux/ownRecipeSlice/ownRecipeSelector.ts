import { RootState } from "../store";
export const selectIsLoading = (state: RootState) => state.ownRecipe.isLoading;

export const selectOwnRecipes = (state: RootState) =>
  state.ownRecipe.recipeList;

export const selectOwnRecipeById = (state: RootState) =>
  state.ownRecipe.ownRecipe;

export const selectOwnRecipesMetaData = (state: RootState) =>
  state.ownRecipe.metaData;

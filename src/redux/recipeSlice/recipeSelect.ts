import { RootState } from "../store";

export const selectOneRecipe = (state: RootState) => state.recipe.recipe;
export const selectOneRecipeImg = (state: RootState) => {
  const [oneRecipe] = state.recipe.recipe;
  if (oneRecipe) {
    return oneRecipe.preview;
  }
};
export const selectOneRecipePreparation = (state: RootState) => {
  const [oneRecipe] = state.recipe.recipe;
  if (oneRecipe) {
    return oneRecipe.instructions;
  }
};
export const selectOneRecipeIngredients = (state: RootState) => {
  const [oneRecipe] = state.recipe.recipe;
  if (oneRecipe) {
    return oneRecipe.ingredients;
  }
};

export const selectIsLoading = (state: RootState) => state.recipe.isLoading;

import { RootState } from "../store";
import { createSelector } from "reselect";

export const selectIsLoading = (state: RootState) =>
  state.ingredients.isLoading;

const selectIngredientsList = (state: RootState) =>
  state.ingredients.ingredientsList;
export const selectMemoIngredientsList = createSelector(
  [selectIngredientsList],
  (ingredientsList) => ingredientsList.map(({ _id, title }) => ({ _id, title }))
);

export const selectMemoFullIngredientsList = createSelector(
  [selectIngredientsList],
  (ingredientsList) => ingredientsList
);

import { RootState } from "../store";
import { createSelector } from "reselect";

const selectPopularRecipes = (state: RootState) => state.popular.popularRecipes;

export const selectIsLoading = (state: RootState) => state.popular.isLoading;

export const selectMemoPopularRecipes = createSelector(
  [selectPopularRecipes],
  (popularRecipes) => popularRecipes
);

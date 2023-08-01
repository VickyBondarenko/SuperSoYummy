import { RootState } from "../store";
import { createSelector } from "reselect";

export const selectIsLoading = (state: RootState) => state.mainPage.isLoading;

const selectMainPageRecipes = (state: RootState) =>
  state.mainPage.mainPageRecipes;
export const selectMemoMainPageRecipes = createSelector(
  selectMainPageRecipes,
  (mainPageRecipes) => mainPageRecipes
);

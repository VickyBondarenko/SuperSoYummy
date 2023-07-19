import { RootState } from "../store";
import { createSelector } from "reselect";

export const selectCategory = (state: RootState) => state.categories.category;

export const selectCategoryRecipes = (state: RootState) =>
  state.categories.categoryRecipes;

export const selectIsLoading = (state: RootState) => state.categories.isLoading;

const selectCategoryList = (state: RootState) => state.categories.categoryList;

export const selectMemoCategoryList = createSelector(
  [selectCategoryList],
  (categoryList) => categoryList.map(({ category }) => category)
);

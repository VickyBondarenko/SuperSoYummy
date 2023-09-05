import { RootState } from "../store";

export const selectShoppingList = (state: RootState) =>
  state.shoppingList.shoppingIngredients;

export const selectTotalPages = (state: RootState) =>
  state.shoppingList.totalPages;

export const selectIsLoading = (state: RootState) =>
  state.shoppingList.isLoading;

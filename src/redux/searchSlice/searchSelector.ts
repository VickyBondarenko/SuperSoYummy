import { RootState } from "../store";

export const selectSearchError = (state: RootState) => state.search.error;

export const selectSearchQuery = (state: RootState) => state.search.searchQuery;

export const selectSearchParam = (state: RootState) => state.search.searchParam;

export const selectSearchRecipes = (state: RootState) => state.search.recipes;

export const selectIsLoading = (state: RootState) => state.search.isLoading;

export const selectTotalPages = (state: RootState) => state.search.totalPages;

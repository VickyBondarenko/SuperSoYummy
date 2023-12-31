import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchRecipes } from "./searchThunk";

import { ISearchState } from "../../types/searchTypes";

const SEARCH_REDUCER = "SEARCH_REDUCER";

const searchInitState: ISearchState = {
  totalPages: 1,
  searchQuery: "",
  searchParam: "Title",
  recipes: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: SEARCH_REDUCER,
  initialState: searchInitState,
  reducers: {
    changeParam: (state, action) => {
      state.searchParam = action.payload;
    },
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    resetSearchPage: (state, _) => {
      state.recipes = [];
      state.searchQuery = "";
      state.searchParam = "Title";
      state.totalPages = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchRecipes.fulfilled, (state, action) => {
        state.totalPages = action.payload.totalPages ?? 0;
        state.recipes = action.payload.recipes ?? [];
      })
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/rejected"),
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/fulfilled"),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      );
  },
});

export default searchSlice.reducer;

export const { changeParam, updateSearchQuery, resetSearchPage } =
  searchSlice.actions;

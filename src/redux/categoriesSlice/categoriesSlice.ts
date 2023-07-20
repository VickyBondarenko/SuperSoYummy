import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryState } from "../../types/categoriesTypes";
import { fetchCategories, fetchCurrentCategory } from "./categoriesThunk";

const CATEGORIES_REDUCER = "CATEGORIES_REDUCER";

const catInitialState: ICategoryState = {
  categoryList: [],
  category: "Beef",
  categoryRecipes: [],
  isLoading: true,
  error: null,
};

const categorySlice = createSlice({
  name: CATEGORIES_REDUCER,
  initialState: catInitialState,
  reducers: {
    changeCategory: (state, action) => void (state.category = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoryList = action.payload;
      })
      .addCase(fetchCurrentCategory.fulfilled, (state, action) => {
        state.categoryRecipes = action.payload?.recipes;
        state.category = action.payload?.category;
      })
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/rejected"),
        (state, action: PayloadAction<string>) => {
          state.error = action.payload;
          state.isLoading = false;
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

export default categorySlice.reducer;

export const { changeCategory } = categorySlice.actions;

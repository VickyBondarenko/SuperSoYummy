import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { IRecipeState } from "../../types/RecipeType";
import { fetchOneRecipe } from "./recipeThunk";

const RECIPE_REDUCER = "RECIPE_REDUCER";

const recipeInitialState: IRecipeState = {
  recipe: [],
  isLoading: true,
  error: null,
};

const recipeSlice = createSlice({
  name: RECIPE_REDUCER,
  initialState: recipeInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneRecipe.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.isLoading = true;
      })
      .addMatcher(
        (action: Action<string>) =>
          typeof action.type === "string" && action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
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

export default recipeSlice.reducer;

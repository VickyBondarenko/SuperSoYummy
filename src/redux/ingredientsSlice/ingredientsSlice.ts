import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { IIngredientState } from "../../types/ingredientsTypes";
import { fetchIngredients } from "./ingredientsThunk";

const INGREDIENTS_REDUCER = "INGREDIENTS_REDUCER";

const ingredientsState: IIngredientState = {
  ingredientsList: [],
  isLoading: true,
  error: null,
};

const ingredientsSlice = createSlice({
  name: INGREDIENTS_REDUCER,
  initialState: ingredientsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredientsList = action.payload;
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

export default ingredientsSlice.reducer;

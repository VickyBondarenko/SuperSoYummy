import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { IShoppingListState } from "../../types/shoppingListTypes";
import {
  fetchAllShoppingIngredients,
  fetchPostShoppingIngredient,
  fetchDeleteShoppingIngredient,
} from "./shoppingListThunk";

const SHOPPINGLIST_REDUCER = "SHOPPINGLIST_REDUCER";

const recipeInitialState: IShoppingListState = {
  totalPages: null,
  shoppingIngredients: [],
  isLoading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: SHOPPINGLIST_REDUCER,
  initialState: recipeInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllShoppingIngredients.fulfilled, (state, action) => {
        state.totalPages = action.payload.totalPages;
        state.shoppingIngredients = action.payload.data.shoppingList;
      })
      .addCase(fetchPostShoppingIngredient.fulfilled, (state, action) => {
        state.shoppingIngredients = [
          ...state.shoppingIngredients,
          action.payload,
        ];
      })
      .addCase(fetchDeleteShoppingIngredient.fulfilled, (state, action) => {
        const index = state.shoppingIngredients.findIndex(
          (shoppingIngredient) => shoppingIngredient._id === action.payload
        );
        state.shoppingIngredients.splice(index, 1);
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

export default shoppingListSlice.reducer;

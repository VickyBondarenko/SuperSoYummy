import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IRecipeListRequest } from "../../types/recipeListTypes";
import {
  IShoppingItem,
  IShoppingListRespons,
  IShoppingListState,
} from "../../types/shoppingListTypes";

export const fetchAllShoppingIngredients = createAsyncThunk<
  IShoppingListRespons,
  IRecipeListRequest,
  { rejectValue: string }
>("shoppingList/fetchAll", async ({ page, limit }, { rejectWithValue }) => {
  try {
    const response = await axios.get("/api/shopping-list", {
      params: { page, limit },
    });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const fetchPostShoppingIngredient = createAsyncThunk<
  IShoppingItem,
  IShoppingItem,
  { rejectValue: string }
>(
  "shoppingList/fetchPostShoppingItem",
  async (ingredient, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/shopping-list", ingredient);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteShoppingIngredient = createAsyncThunk<
  string | undefined,
  string,
  { rejectValue: string; state: IShoppingListState }
>(
  "shoppingList/fetchDelete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete("/api/shopping-list", {
        data: { _id: id },
      });
      if (response.status === 204) {
        return id;
      } else {
        return;
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const isLoading = getState().isLoading;
      if (isLoading) {
        return false;
      }
    },
  }
);

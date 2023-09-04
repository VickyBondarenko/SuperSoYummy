import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  IShoppingItem,
  IShoppingListDeleteRequest,
  IShoppingListRespons,
  IShoppingListState,
} from "../../types/shoppingListtypes";

export const fetchAllShoppingIngredients = createAsyncThunk<
  IShoppingListRespons,
  undefined,
  { rejectValue: string }
>("shoppingList/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/api/shopping-list");

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
  IShoppingListDeleteRequest,
  { rejectValue: string; state: IShoppingListState }
>(
  "shoppingList/fetchDelete",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete("/api/shopping-list", {
        data: { _id },
      });
      if (response.status === 204) {
        return _id;
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

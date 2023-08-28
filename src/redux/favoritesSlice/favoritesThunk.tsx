import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  IRecipeListRequest,
  IRecipeListResponse,
} from "../../types/recipeListTypes";

import { IRecipeById } from "../../types/RecipeType";

export const fetchToggleFavoriteRecipe = createAsyncThunk<
  IRecipeById,
  string,
  { rejectValue: string }
>("favorites/fetchAddFavoriteRecipe", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`/api/favorites/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      console.log(error.response?.data);
    } else if (error instanceof Error) console.log(error.message);
    return rejectWithValue("Error");
  }
});

export const fetchFavoriteRecipes = createAsyncThunk<
  IRecipeListResponse,
  IRecipeListRequest,
  { rejectValue: string }
>(
  "favorites/fetchFavoriteRecipes",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.get<IRecipeListResponse>("/api/favorites", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        console.log(error.response?.data);
      } else if (error instanceof Error) console.log(error.message);
      return rejectWithValue("Error");
    }
  }
);

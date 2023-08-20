import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  IAddOwnRecipeForm,
  IOwnRecipeResponse,
} from "../../types/ownRecipeTypes";

import {
  IFavoritesRequest,
  IFavoritesResponse,
} from "../../types/favoritesTypes";

export const fetcToggleFavoriteRecipe = createAsyncThunk<
  IAddOwnRecipeForm,
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
  IFavoritesResponse,
  IFavoritesRequest,
  { rejectValue: string }
>(
  "favorites/fetchFavoriteRecipes",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.get<IFavoritesResponse>("/api/favorites", {
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

export const fetchDeleteOwnRecipe = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("favorites/fetchDeleteFavoriteRecipe", async (id, { rejectWithValue }) => {
  try {
    await axios.delete<IOwnRecipeResponse>(`/api/ownRecipes/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      console.log(error.response?.data);
    } else if (error instanceof Error) console.log(error.message);
    return rejectWithValue("Error");
  }
});

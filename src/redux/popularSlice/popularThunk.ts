import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IRecipe } from "../../types/RecipeType";

export const fetchPopularRecipes = createAsyncThunk<
  IRecipe[],
  number,
  { rejectValue: string }
>("popular/fetchPopularRecipes", async (limit, { rejectWithValue }) => {
  try {
    const response = await axios.get<IRecipe[]>("/api/popular-recipes", {
      params: {
        limit,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

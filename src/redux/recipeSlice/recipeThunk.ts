import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IRecipeById } from "../../types/RecipeType";

export const fetchOneRecipe = createAsyncThunk<
  IRecipeById[],
  string,
  { rejectValue: string }
>("recipe/fetchOneRecipe", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get<IRecipeById[]>(`/api/recipes/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

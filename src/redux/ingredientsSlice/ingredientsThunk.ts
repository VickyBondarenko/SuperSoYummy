import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IIngredient } from "../../types/ingredientsTypes";

export const fetchIngredients = createAsyncThunk<
  IIngredient[],
  undefined,
  { rejectValue: string }
>("ingredients/fetchIngredients", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<IIngredient[]>("/api/ingredients/list");
    return response.data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

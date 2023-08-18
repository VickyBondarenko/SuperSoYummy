import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IAddOwnRecipeForm } from "../../types/ownRecipeTypes";

export const fetchAddOwnRecipe = createAsyncThunk<
  IAddOwnRecipeForm,
  FormData,
  { rejectValue: string }
>("ownRecipe/fetchAddOwnRecipe", async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post("/api/ownRecipes", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      console.log(error.response?.data);
    } else if (error instanceof Error) console.log(error.message);
    return rejectWithValue("Error");
  }
});

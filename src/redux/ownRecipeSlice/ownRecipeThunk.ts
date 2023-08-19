import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  IAddOwnRecipeForm,
  IOwnRecipeRequest,
  IOwnRecipeResponse,
} from "../../types/ownRecipeTypes";

import { IRecipeById } from "../../types/RecipeType";

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

export const fetchOwnRecipes = createAsyncThunk<
  IOwnRecipeResponse,
  IOwnRecipeRequest,
  { rejectValue: string }
>("ownRecipe/fetchOwnRecipes", async ({ page, limit }, { rejectWithValue }) => {
  try {
    const response = await axios.get<IOwnRecipeResponse>("/api/ownRecipes", {
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
});

export const fetchDeleteOwnRecipe = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("ownRecipe/fetchDeleteOwnRecipe", async (id, { rejectWithValue }) => {
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
export const fetchOwnRecipeById = createAsyncThunk<
  IRecipeById,
  string,
  { rejectValue: string }
>("ownRecipe/fetchOwnRecipeById", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get<IRecipeById>(`/api/ownRecipes/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      console.log(error.response?.data);
    } else if (error instanceof Error) console.log(error.message);
    return rejectWithValue("Error");
  }
});

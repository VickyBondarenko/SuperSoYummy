import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_BACKEND_BASE_URL: string = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

import {
  ICategoryRequest,
  ICategoryNameItem,
} from "../../types/categoriesTypes";

export const fetchCategories = createAsyncThunk<
  ICategoryNameItem[],
  undefined,
  { rejectValue: string }
>("categories/fetchCategories", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<ICategoryNameItem[]>(
      "/api/recipes/category-list"
    );
    return response.data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const fetchCurrentCategory = createAsyncThunk<
  ICategoryRequest,
  string,
  { rejectValue: string }
>("categories/fetchCurrentCategory", async (category, { rejectWithValue }) => {
  try {
    const response = await axios.get<ICategoryRequest>(
      `/api/recipes/category/${category}?recipeLimit=8`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      console.log(error.response?.data);
    } else if (error instanceof Error) console.log(error.message);
    return rejectWithValue("Error");
  }
});

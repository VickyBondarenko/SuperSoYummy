import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

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
    const data = response.data;
    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const fetchCurrentCategory = createAsyncThunk(
  "categories/fetchCurrentCategory",
  async (category: string) => {
    try {
      const { data } = await axios.get<ICategoryRequest[]>(
        `/api/recipes/category/${category}?recipeLimit=8`
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        console.log(error.response?.data);
      } else if (error instanceof Error) console.log(error.message);
    }
  }
);

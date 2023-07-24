import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice/categoriesSlice";
import authReducer from "./authSlice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

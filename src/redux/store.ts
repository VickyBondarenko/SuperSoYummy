import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice/categoriesSlice";
import subscribeSlice from "./subscribeSlice/subscribeSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    subsbcribe: subscribeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from "@reduxjs/toolkit";

const THEME_REDUCER = "THEME_REDUCER";
interface IThemeState {
  darkMode: boolean;
}

const themeInitialState: IThemeState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: THEME_REDUCER,
  initialState: themeInitialState,
  reducers: {
    toggleTheme: (state) => void (state.darkMode = !state.darkMode),
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;

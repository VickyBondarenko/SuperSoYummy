import { RootState } from "../store";
// import { createSelector } from "reselect";

// export const selectCategory = (state: RootState) => state.categories.category;

// export const selectCategoryRecipes = (state: RootState) =>
//   state.categories.categoryRecipes;

// export const selectIsLoading = (state: RootState) => state.categories.isLoading;

// const selectCategoryList = (state: RootState) => state.categories.categoryList;
// export const selectMemoCategoryList = createSelector(
//   [selectCategoryList],
//   (categoryList) => categoryList.map(({ category }) => category)
// );

export const selectIsAuth = (state: RootState) => Boolean(state.auth.token);
export const selectUserInfo = (state: RootState) => state.auth.user;
export const getToken = (state: RootState) => state.auth.token;
// export const getIsRefreshing = (state: RootState) => state.auth.isRefreshing;
// export const getIsEditModalOpen = (state: RootState) =>
//   state.auth.isEditModalOpen;
// export const selectUserId = (state: RootState) => state.auth.user._id;

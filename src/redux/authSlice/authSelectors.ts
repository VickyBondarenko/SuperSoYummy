import { RootState } from "../store";

export const selectIsAuth = (state: RootState) =>
  Boolean(state.auth.accessToken);
export const getUserName = (state: RootState) => state.auth.user;
export const getToken = (state: RootState) => state.auth.accessToken;
// export const getIsRefreshing = (state: RootState) => state.auth.isRefreshing;
// export const getIsEditModalOpen = (state: RootState) =>
//   state.auth.isEditModalOpen;
// export const selectUserId = (state: RootState) => state.auth.user._id;

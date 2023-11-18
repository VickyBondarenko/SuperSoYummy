import { RootState } from "../store";

export const selectIsAuth = (state: RootState) =>
  Boolean(state.auth.accessToken);

export const selectUserInfo = (state: RootState) => state.auth.user;

export const selectUserId = (state: RootState) => {
  const { _id } = state.auth.user;
  if (_id) {
    return _id;
  }
};

export const getToken = (state: RootState) => state.auth.accessToken;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

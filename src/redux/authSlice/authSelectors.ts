import { RootState } from "../store";

export const selectIsAuth = (state: RootState) =>
  Boolean(state.auth.accessToken);
export const selectUserInfo = (state: RootState) => state.auth.user;
export const getToken = (state: RootState) => state.auth.accessToken;

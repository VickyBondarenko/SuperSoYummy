import Cookies from "js-cookie";

export const setTokenToCookies = (
  accessToken: string,
  refreshToken: string
): void => {
  if (accessToken) {
    Cookies.set("accessToken", accessToken);
  }
  if (refreshToken) {
    Cookies.set("refreshToken", refreshToken);
  }
};

export const getTokenFromCookies = (
  cookiesData: string
): { accessToken: string | null; refreshToken: string | null } => {
  const accessTokenCookie = cookiesData
    .split(";")
    .find((cookie: string) => cookie.trim().startsWith("accessToken="));

  const refreshTokenCookie = cookiesData
    .split(";")
    .find((cookie: string) => cookie.trim().startsWith("refreshToken="));

  const accessToken = accessTokenCookie
    ? accessTokenCookie.split("=")[1]
    : null;
  const refreshToken = refreshTokenCookie
    ? refreshTokenCookie.split("=")[1]
    : null;

  return { accessToken, refreshToken };
};

export const removeTokenFromCookies = (): void => {
  Cookies.remove("refreshToken", { path: "" });
  Cookies.remove("accessToken", { path: "" });
};

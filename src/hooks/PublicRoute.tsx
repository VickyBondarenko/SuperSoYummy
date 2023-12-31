import React from "react";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/authSlice/authSelectors";
import { useAppSelector } from "./reduxHooks";
import { IRouteProps } from "../types/authTypes";

export const PublicRoute: React.FC<IRouteProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(selectIsAuth);
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;

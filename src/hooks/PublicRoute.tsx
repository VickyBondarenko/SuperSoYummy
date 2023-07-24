import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/authSlice/authSelectors";
import { useAppSelector } from "./reduxHooks";

interface PrivateRouteProps {
  children: ReactNode | any;
}

export const PublicRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(selectIsAuth);
  return isLoggedIn ? <Navigate to="/" /> : children;
};

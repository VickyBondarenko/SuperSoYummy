import { ReactNode } from "react";

export interface IFormValues {
  name?: string;
  email: string;
  password: string;
}

export interface IFormProps {
  page: "signin" | "register";
  title?: string;
}

export interface IUserResponsData {
  _id: "string";
  name: "string";
  email: "string";
  avatarURL: "string";
}

export interface IAuthRespons {
  accessToken: string;
  refreshToken: string;
  user: IUserResponsData;
}

export interface IAuthState {
  user: {
    _id: string;
    name: string;
    avatarURL: string;
    email: string;
  };
  refreshToken: string | null;
  accessToken: string | null;
  isLoading: boolean;
  isRefreshing: boolean;
  isEditModalOpen: boolean;
  error: string | null;
}

export interface IAppState {
  auth: IAuthState;
}

export interface IRouteProps {
  children: ReactNode | any;
}

export interface IAsyncThunkCurrentUserReturn {
  user: {
    _id: string;
    name: string;
    avatarURL: string;
    email: string;
  };
}

export interface IUserEdition {
  data: { name: string; avatarURL: string };
}

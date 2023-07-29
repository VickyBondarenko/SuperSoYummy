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
  token: string;
  user: IUserResponsData;
}

export interface IAuthState {
  user: {
    _id: string;
    name: string;
    avatarURL: string;
    email: string;
  };
  token: string | null;
  isLoading: boolean;
  isRefreshing: boolean;
  isEditModalOpen: boolean;
  error: string | null;
}

export interface IRouteProps {
  children: ReactNode | any;
}

export interface IAppState {
  // Здесь указывайте другие свойства вашего состояния, если они есть
  auth: IAuthState;
}

export type IAsyncThunkCurrentUserReturn = IUserResponsData | { to: string };

export interface IUserEdition {
  name: string;
  avatarURL: string;
}

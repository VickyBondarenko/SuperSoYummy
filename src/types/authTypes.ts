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

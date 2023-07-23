export interface FormValues {
  name?: string;
  email: string;
  password: string;
}

export interface FormProps {
  page: "signin" | "register";
  title?: string;
}

export interface UserResponsData {
  _id: "string";
  name: "string";
  email: "string";
  avatarURL: "string";
}

export interface RegisterRespons {
  token: "string";
  user: UserResponsData;
}

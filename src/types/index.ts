export interface SignupFormType {
  file?: string;
  id: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface SignupUserType extends SignupFormType {
  createdBy: string;
  updatedBy: string;
}

export interface ProfileFormType {
  image?: File[];
  name: string;
}

export interface LoginForm {
  id: string;
  password: string;
}

export interface UpdateForm {
  id: string;
  name: string;
  file?: string;
}

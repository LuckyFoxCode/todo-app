export interface UserProfile {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface LoginFormInputs {
  id: string;
  email: string;
  password: string;
}

export interface RegisterFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

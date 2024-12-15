export interface LoginForm {
  username: string;
  password: string;
}

export interface RegistrationForm extends LoginForm {
  email: string;
  confirmPassword: string;
}

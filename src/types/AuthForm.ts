export interface LoginForm {
  email: string;
  password: string;
}

export interface RegistrationForm extends LoginForm {
  username: string;
  confirmPassword: string;
}

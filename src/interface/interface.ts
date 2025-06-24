export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
}

export interface Data {
  id?: string;
  title: string;
  tech: string;
  desc: string;
  code: string;
  date: string;
}

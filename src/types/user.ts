export interface User {
  id: number;
  usernname: string;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
  is_staff: boolean;
  is_superuser: boolean;
  is_active: boolean;
  last_login: string;
}

export interface Profile {
  id: number;
  bio: string;
  date_of_birth: string;
  location: string;
  user: User;
}

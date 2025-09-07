export interface UserModel {
  id?: number;
  username: string;
  email?: string;
  role?: string; //"ROLE_ADMIN" or "ROLE_USER"
}

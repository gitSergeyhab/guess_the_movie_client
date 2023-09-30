export interface User {
  _id: string;
  name: string;
  rete: number;
  createdAt: Date;
}

export interface UserLoginResponse {
  user: User;
  token: string;
}

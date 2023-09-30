export interface LoginFields {
  username?: string;
  password?: string;
}

export interface RegisterFields extends LoginFields{
  passwordRepeat?: string;
};

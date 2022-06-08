export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
}

export interface IToken {
  _id?: string;
  name: string;
  email: string;
}

export interface IUserServiceCreate {
  _id?: string;
  name: string;
  token: string;
}

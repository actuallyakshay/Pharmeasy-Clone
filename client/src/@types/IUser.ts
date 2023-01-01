export interface IUser {
  id?: string;
  name?: string;
  email?: string;
  pinCode?: number;
  password?: string;
  role?: Role;
  address?: Array<string>;
  mobile?: number;
  age?: number;
  gender?: Gender;
  user_image?: string;
  phoneNumber?: number;
  versionKey?: Date;
  timestamps?: Date;
}

export enum Role {
  Admin = "Admin",
  HR = "HR",
  Guest = "Guest",
  ProductManager = "ProductManager",
  Doctor = "Doctor",
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Others = "Others",
}

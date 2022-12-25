import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

export interface ICart {
  _id: string;
  versionKey: Date;
  timeStamps: Date;
  quantity: number;
  user: IUser;
  product: IProduct;
}

export interface IBody {
  product: string;
  type?: string;
  quantity: number;
}

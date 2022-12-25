import { IProduct } from "./IProduct";

export interface ISearchProductReducer {
  productLoading?: boolean;
  productError?: boolean;
  productData?: IProduct[] ;
}

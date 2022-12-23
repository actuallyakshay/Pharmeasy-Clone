import axios from "axios";
import { Dispatch } from "react";
import { IProduct } from "../../@types/IProduct";
import { ProductTypes } from "./product.type";

export interface IProductAction {
  type: string;
  payload?: IProduct[];
}

export const getProductData =
  (category: string, firstLetter: string) =>
  (dispatch: Dispatch<IProductAction>) => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/product?category=${category}&firstLetter=${firstLetter}`
      )
      .then((res) => {
        dispatch({
          type: ProductTypes.GET_PRODUCT_SUCCESS,
          payload: res.data,
        });
        console.log(res.data);
      })
      .catch((e) => dispatch({ type: ProductTypes.GET_PRODUCT_ERROR }));
  };

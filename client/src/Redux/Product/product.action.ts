import axios from "axios";
import { Dispatch } from "react";
import { IProduct } from "../../@types/IProduct";
import { ProductTypes } from "./product.type";

export interface IProductAction {
  type: string;
  payload?: IProduct[];
}

export const getProductData =
  (
    category: string,
    firstLetter: string = "",
    page: number = 1,
    priceSort: string = "",
    offSort: string = "",
    priceArr: string = ""
  ) =>
  (dispatch: Dispatch<IProductAction>) => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/product?category=${category}&firstLetter=${firstLetter}&priceSort=${priceSort}&priceArr=${priceArr}&offSort=${offSort}&page=${page}&limit=30`
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
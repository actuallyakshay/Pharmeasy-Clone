import {
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
} from "./product.types";
import axios from "axios";

export const getProductData = (category, firstLetter) => (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  axios
    .get(
      `${process.env.REACT_APP_URL}/product?category=${category}&firstLetter=${firstLetter}`
    )
    .then((res) => dispatch({ type: PRODUCT_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: PRODUCT_ERROR }));
};

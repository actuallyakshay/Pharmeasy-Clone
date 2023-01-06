import axios from "axios";
import { Dispatch } from "react";
import { IProduct } from "../../@types/IProduct";
import { SearchProductTypes } from "./search.actionTypes";

export interface ISearchProductAction {
  type: String;
  payload?: IProduct[];
}

const getProduct =
  (input: String) => (dispatch: Dispatch<ISearchProductAction>) => {
    dispatch({ type: SearchProductTypes.SEARCH_REQUEST });
    axios
      .get(`${process.env.REACT_APP_URL}/product?input=${input}&limit=${30}`)
      .then((res) => {
        dispatch({
          type: SearchProductTypes.SEARCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({ type: SearchProductTypes.SEARCH_FAILED });
      });
  };

export { getProduct };

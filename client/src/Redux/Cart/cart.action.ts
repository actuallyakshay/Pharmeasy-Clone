import axios from "axios";
import { Dispatch } from "redux";
import { IBody, ICart } from "../../@types/ICart";
import { ICartTypes } from "./cart.type";

export interface ICartAction {
  type: ICartTypes;
  payload?: ICart[];
  getCartData?: Function;
}

export const getCartData = () => (dispatch: Dispatch<ICartAction>) => {
  dispatch({ type: ICartTypes.GET_CART_LOADING });
  let token: string | null = localStorage.getItem("token");
  axios
    .get(`${process.env.REACT_APP_URL}/cart`, {
      headers: {
        token: token,
      },
    })
    .then((res) =>
      dispatch({ type: ICartTypes.GET_CART_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: ICartTypes.GET_CART_ERROR }));
};

export const addDataInCart =
  (body: IBody) => (dispatch: Dispatch<ICartAction>) => {
    let token: string | null = localStorage.getItem("token");
    axios
      .post(`${process.env.REACT_APP_URL}/cart`, body, {
        headers: {
          token: token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.message));
  };

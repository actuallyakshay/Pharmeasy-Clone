import { ICart } from "../../@types/ICart";
import { IProduct } from "../../@types/IProduct";
import { ICartAction } from "./cart.action";
import { ICartTypes } from "./cart.type";

export interface IState {
  cartLoading: boolean;
  cartData: ICart[];
  cartError: boolean;
}

const initState: IState = {
  cartLoading: false,
  cartData: [],
  cartError: false,
};

export const cartReducer = (state = initState, action: ICartAction) => {
  switch (action.type) {
    case ICartTypes.GET_CART_LOADING:
      return {
        ...state,
        cartLoading: true,
        cartError: false,
      };
    case ICartTypes.GET_CART_SUCCESS:
      return {
        ...state,
        cartData: action.payload,
        cartLoading: false,
        cartError: false,
      };

    case ICartTypes.GET_CART_ERROR:
      return {
        ...state,
        cartError: true,
      };

    default:
      return state;
  }
};

import { IProductReducer } from "../../@types/IProduct";
import { IProductAction } from "./product.action";
import { ProductTypes } from "./product.type";

const initialState: IProductReducer = {
  productLoading: false,
  productError: false,
  productData: [],
};

export const productReducer = (
  state: IProductReducer = initialState,
  action: IProductAction
) => {
  switch (action.type) {
    case ProductTypes.GET_PRODUCT_LOADING:
      return {
        ...state,
        productLoading: true,
        productError: false,
      };

    case ProductTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productData: action.payload,
        productLoading: false,
        productError: false,
      };

    case ProductTypes.GET_PRODUCT_ERROR:
      return {
        ...state,
        productError: true,
      };

    default:
      return state;
  }
};

import {
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
} from "./product.types";

const iState = {
  productloading: false,
  productError: false,
  productData: [],
};

export const productReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        productloading: true,
        productError: false,
      };

    case PRODUCT_SUCCESS:
      return {
        ...state,
        productData: payload,
        productloading: false,
        productError: false,
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        productError: true,
      };

    default:
      return state;
  }
};

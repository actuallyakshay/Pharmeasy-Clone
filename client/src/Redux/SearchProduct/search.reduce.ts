import { SearchProductTypes } from "./search.actionTypes";
import { ISearchProductReducer } from "../../@types/IProduct";

const InitialState: ISearchProductReducer = {
  productLoading: false,
  productError: false,
  productData: [],
};

interface Action {
  type: String;
  payload: [];
}
export const SearchReducer = (state = InitialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SearchProductTypes.SEARCH_REQUEST:
      return {
        productLoading: true,
      };

    case SearchProductTypes.SEARCH_SUCCESS:
      return {
        productLoading: false,
        productData: payload,
      };

    case SearchProductTypes.SEARCH_FAILED:
      return {
        productLoading: false,
        productError: true,
      };
    default:
      return state;
  }
};

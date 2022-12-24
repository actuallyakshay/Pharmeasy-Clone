import { SearchProductTypes } from "./search.actionTypes";
import { IProduct } from "../../@types/IProduct";
import { ISearchProductReducer } from "../../@types/ISearchProduct";

const InitialState = {
  productLoading: false,
  productError: false,
  productData: [],
};

interface IAction {
  type: String;
  payload?: IProduct[];
}

export const SearchReducer = (
  state: ISearchProductReducer = InitialState,
  action: IAction
) => {
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

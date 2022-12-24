import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productReducer } from "./Product/product.reducer";
import { SearchReducer } from "./SearchProduct/search.reduce";

const rootReducer = combineReducers({
  productReducer: productReducer,
  SearchReducer: SearchReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppState = ReturnType<typeof rootReducer>;

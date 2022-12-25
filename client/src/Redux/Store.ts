import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cart.reducer";
import { productReducer } from "./Product/product.reducer";
import { SearchReducer } from "./SearchProduct/search.reduce";

const rootReducer = combineReducers({
  productReducer: productReducer,
  SearchReducer: SearchReducer,
  cartReducer: cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppState = ReturnType<typeof rootReducer>;

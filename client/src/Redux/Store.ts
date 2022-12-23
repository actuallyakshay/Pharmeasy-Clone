import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productReducer } from "./Product/product.reducer";

const rootReducer = combineReducers({
  productReducer: productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppState = ReturnType<typeof rootReducer>;

import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Product/product.reducer";

const rootReducer = combineReducers({
  product: productReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;

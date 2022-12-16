import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const store = legacy_createStore(applyMiddleware(thunk));
export default store;

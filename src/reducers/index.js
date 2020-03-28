import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  shoppingCart: shoppingReducer,
  products: productsReducer
});

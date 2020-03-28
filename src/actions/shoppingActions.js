import { ADD__PRODUCT } from "./types";
import { products } from "../initialData";

export const addProduct = product => dispatch => {
  dispatch({
    type: ADD__PRODUCT,
    payload: product
  });
};

import { FILTER__PRODUCTS } from "./types";
import { FETCH__PRODUCT } from "./types";

export const filterProducts = productType => dispatch => {
  console.log("filter product action");
  dispatch({
    type: FILTER__PRODUCTS,
    payload: {
      productType
    }
  });
};

export const fetchSingleProduct = id => dispatch => {
  console.log("fetch single product");
  dispatch({
    type: FETCH__PRODUCT,
    payload: {
      id
    }
  });
};

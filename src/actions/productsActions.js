import { FILTER__PRODUCTS } from "./types";

export const filterProducts = productType => dispatch => {
  console.log("filter product action");
  dispatch({
    type: FILTER__PRODUCTS,
    payload: {
      productType
    }
  });
};

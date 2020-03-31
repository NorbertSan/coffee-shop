import { ADD__PRODUCT, REMOVE__PRODUCT, DECREASE__PRODUCT } from "./types";

export const addProduct = product => dispatch => {
  console.log("add product action");
  dispatch({
    type: ADD__PRODUCT,
    payload: product
  });
};

export const removeProduct = id => dispatch => {
  console.log("remove product action");
  dispatch({
    type: REMOVE__PRODUCT,
    payload: {
      id
    }
  });
};

export const decreaseProduct = id => dispatch => {
  console.log("decrease product");
  dispatch({
    type: DECREASE__PRODUCT,
    payload: {
      id
    }
  });
};

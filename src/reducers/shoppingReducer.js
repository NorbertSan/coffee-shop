import { ADD__PRODUCT } from "actions/types";

const initialState = {
  products: [],
  shoppingCart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD__PRODUCT:
      return {
        ...state,
        shoppingCart: action.payload
      };
    default:
      console.log("default");
      return state;
  }
};

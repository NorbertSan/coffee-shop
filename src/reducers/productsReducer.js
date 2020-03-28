import { FILTER__PRODUCTS } from "actions/types";
import { products } from "initialData";

const initialState = {
  products: products,
  filteredItems: products,
  filterType: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER__PRODUCTS:
      const filterType = action.payload.productType;
      const filterProducts = () => {
        if (filterType === "") return state.products;
        else
          return state.products.filter(product =>
            product.type.includes(filterType)
          );
      };
      return {
        ...state,
        filteredItems: filterProducts(),
        filterType
      };

    default:
      return state;
  }
};

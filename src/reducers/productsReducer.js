import { FILTER__PRODUCTS } from "actions/types";
import { products } from "initialData";

const bestsellers = products.filter(product =>
  product.type.includes("bestseller")
);

const initialState = {
  bestsellers,
  products,
  filteredItems: products,
  filterType: "",
  filterItem: null,
  itemDetailExist: true
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

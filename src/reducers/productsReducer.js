import { FILTER__PRODUCTS, FETCH__PRODUCT } from "actions/types";
import { products } from "initialData";

const bestsellers = products.filter(product =>
  product.type.includes("bestseller")
);

const initialState = {
  bestsellers,
  products,
  filteredItems: products,
  filterType: "",
  filterItem: null
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

    case FETCH__PRODUCT:
      const id = action.payload.id;
      const products = state.products;
      const [filterItem] = products.filter(item => item.id === id);

      return {
        ...state,
        filterItem
      };

    default:
      return state;
  }
};

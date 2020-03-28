import { ADD__PRODUCT, REMOVE__PRODUCT } from "actions/types";

const initialState = {
  list: [],
  finalPrice: 0
};

const calculateFinalPrice = newProductsList =>
  newProductsList.reduce((result, item) => {
    let cost = 0;
    for (let i = 0; i < item.amount; i++) cost += item.price;
    return result + cost;
  }, 0);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD__PRODUCT:
      const ProductAlreadyExist = () => {
        const ids = state.list.map(item => item.id);
        return ids.includes(newProduct.id);
      };
      const increaseAmount = () =>
        [...state.list].map(item => {
          if (item.id === newProduct.id) item.amount++;
          return item;
        });
      const addNewProduct = () => [...state.list, newProduct];

      const newProduct = action.payload;
      let newProductsList;
      if (ProductAlreadyExist()) newProductsList = increaseAmount();
      else newProductsList = addNewProduct();

      return {
        ...state,
        list: newProductsList,
        finalPrice: calculateFinalPrice(newProductsList).toFixed(2)
      };

    case REMOVE__PRODUCT:
      const itemID = action.payload.id;
      return {
        ...state,
        list: state.list.filter(item => item.id !== itemID),
        finalPrice: calculateFinalPrice(
          state.list.filter(item => item.id !== itemID)
        )
      };
    default:
      return state;
  }
};

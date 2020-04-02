import {
  ADD__PRODUCT,
  REMOVE__PRODUCT,
  DECREASE__PRODUCT,
  ADD_COUPON
} from "actions/types";

import { codes } from "initialData";

const initialState = {
  list: [],
  finalPrice: 0,
  discount: 0,
  coupons: [],
  couponAlert: false
};

const calculateFinalPrice = (newProductsList, discount) => {
  let finalPrice = newProductsList.reduce((result, item) => {
    let cost = 0;
    for (let i = 0; i < item.amount; i++) cost = cost + item.price;
    return result + cost;
  }, 0);
  if (discount) finalPrice *= (100 - discount) * 0.01;
  return finalPrice;
};

const areTwoObjectsEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  obj1Keys.forEach(keyName => {
    if (obj1[keyName] !== obj2[keyName]) return false;
  });

  return true;
};

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
        finalPrice: calculateFinalPrice(
          newProductsList,
          state.discount
        ).toFixed(2)
      };

    case REMOVE__PRODUCT:
      const itemID = action.payload.id;
      return {
        ...state,
        list: state.list.filter(item => item.id !== itemID),
        finalPrice: calculateFinalPrice(
          state.list.filter(item => item.id !== itemID, state.discount)
        )
      };

    case DECREASE__PRODUCT:
      const id = action.payload.id;

      const list = state.list.filter(item => {
        if (item.id === id) item.amount--;
        return item;
      });

      return {
        ...state,
        list,
        finalPrice: calculateFinalPrice(list, state.discount)
      };

    case ADD_COUPON:
      const searchForCoupon = () => {
        let discount = null;
        codes.forEach(item => {
          if (item.code === coupon) discount = item.type;
        });
        return discount;
      };
      const coupon = action.payload.coupon;
      const discount = searchForCoupon();
      const newCoupons = [...state.coupons];
      if (searchForCoupon()) {
        const couponsCodes = newCoupons.map(coupon => coupon.code);
        if (!couponsCodes.includes(coupon))
          newCoupons.push({ code: coupon, discount });
      }
      let newGreatestDiscount;
      state.discount > discount
        ? (newGreatestDiscount = state.discount)
        : (newGreatestDiscount = discount);

      return {
        ...state,
        coupons: newCoupons,
        discount: newGreatestDiscount,
        finalPrice: calculateFinalPrice(state.list, newGreatestDiscount),
        couponAlert: state.coupons.length === newCoupons.length
      };
    default:
      return state;
  }
};

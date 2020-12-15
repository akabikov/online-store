import { createSelector } from "reselect";
import { getProducts } from "../products";

export const getCart = (state) => state.cart;

export const getCartItem = createSelector(
  getCart,
  getProducts,
  (_, id) => id,
  (cart, products, id) => ({ ...cart.products[id], ...products[id] })
);

export const getCartSum = createSelector(
  getCart,
  getProducts,
  (cart, products) =>
    cart.keys.reduce(
      (sum, id) => sum + products[id].price * cart.products[id].num,
      0
    )
);

export const isCartEmpty = ({ cart }) => !cart?.keys?.length;

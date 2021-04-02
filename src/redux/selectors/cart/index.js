import { createSelector } from "reselect";
import { getProducts } from "../products";
import { _getProductById } from "../products";

export const getCart = (state) => state.cart;

export const getCartItem = createSelector(
  getCart,
  getProducts,
  (_, id) => id,
  (cart, products, id) => ({
    ...cart.products[id],
    ..._getProductById(products, id),
  })
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

export const getCartQuantity = createSelector(getCart, (cart) =>
  cart.keys.reduce((sum, id) => sum + cart.products[id].num, 0)
);

export const isCartEmpty = ({ cart }) => !cart?.keys?.length;

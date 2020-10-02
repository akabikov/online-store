import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actionTypes";

const EMPTY_CART = { keys: [], products: {} };

export default function (state = EMPTY_CART, action) {
  const { keys, products } = state;
  const { type, payload } = action;

  const reducers = {
    [ADD_TO_CART]: ({ id, num }) => {
      if (!(Number.isInteger(num) && num > 0))
        throw new Error("Invalid number of items");
      return {
        keys: keys.includes(id) ? keys : [...keys, id],
        products: { ...products, [id]: { num } },
      };
    },
    [REMOVE_FROM_CART]: ({ id }) => {
      const { [id]: deletedId, ...restProducts } = products;
      return {
        keys: keys.filter((el) => el.id !== id),
        products: restProducts,
      };
    },
    [CLEAR_CART]: () => EMPTY_CART,
  };

  return reducers[type]?.(payload) || state;
}

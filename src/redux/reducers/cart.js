import {
  ADD_TO_CART,
  EDIT_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../actionTypes";

const EMPTY_CART = { keys: [], products: {} };

export default function (state = EMPTY_CART, action) {
  const { keys, products } = state;

  const editCart = (id, num, previousNum) => {
    if (!(Number.isInteger(num) && num > 0))
      throw new Error("Invalid number of items");
    return {
      keys: keys.includes(id) ? keys : [...keys, id],
      products: {
        ...products,
        [id]: { num: previousNum + num },
      },
    };
  };

  const reducers = {
    [ADD_TO_CART]: ({ id, num = 1 }) =>
      editCart(id, num, products[id]?.num || 0),
    [EDIT_CART]: ({ id, num }) => editCart(id, num, 0),
    [REMOVE_FROM_CART]: ({ id }) => {
      const { [id]: deletedId, ...restProducts } = products;
      return {
        keys: keys.filter((key) => key !== id),
        products: restProducts,
      };
    },
    [CLEAR_CART]: () => EMPTY_CART,
  };

  return reducers[action.type]?.(action.payload) || state;
}

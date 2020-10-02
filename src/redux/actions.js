import {
  ADD_TO_CART,
  EDIT_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "./actionTypes";

export const add = (id, num) => ({
  type: ADD_TO_CART,
  payload: { id, num },
});

export const edit = (id, num) => ({
  type: EDIT_CART,
  payload: { id, num },
});

export const remove = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});

export const clear = () => ({
  type: CLEAR_CART,
});

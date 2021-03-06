import {
  ADD_TO_CART,
  EDIT_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORTING,
} from "./actionTypes";

import loadData from "../helpers/loadData";

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

export const loadProducts = (url) => async (dispatch) => {
  const products = await loadData(url);

  return dispatch({
    type: LOAD_PRODUCTS,
    payload: products,
  });
};

export const updateFilters = (filter) => ({
  type: UPDATE_FILTERS,
  payload: filter,
});

export const updateSorting = (sorting) => ({
  type: UPDATE_SORTING,
  payload: sorting,
});

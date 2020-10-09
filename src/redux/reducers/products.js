import { LOAD_PRODUCTS } from "../actionTypes";

export default function products(state = {}, action) {
  const { type, payload } = action;
  return type === LOAD_PRODUCTS ? { ...state, ...payload } : state;
}

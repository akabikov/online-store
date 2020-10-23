import { UPDATE_FILTERS } from "../actionTypes";

export default function filters(state = {}, action) {
  const { type, payload } = action;
  return type === UPDATE_FILTERS ? { ...state, ...payload } : state;
}

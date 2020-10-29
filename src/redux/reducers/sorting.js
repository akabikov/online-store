import { UPDATE_SORTING } from "../actionTypes";

export const DEFAULT_SORT = { orderBy: "default", direction: "default" };

export default function sorting(state = DEFAULT_SORT, action) {
  const { type, payload } = action;
  return type === UPDATE_SORTING ? { ...state, ...payload } : state;
}

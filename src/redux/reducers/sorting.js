import { UPDATE_SORTING } from "../actionTypes";

const INIT_STATE = { orderBy: "default", direction: "default" };

export default function sorting(state = INIT_STATE, action) {
  const { type, payload } = action;
  return type === UPDATE_SORTING ? { ...state, ...payload } : state;
}

import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import filters from "./filters";

export default combineReducers({ cart, products, filters });

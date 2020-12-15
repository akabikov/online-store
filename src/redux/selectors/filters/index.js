import { createSelector } from "reselect";
import { applyFilters } from "./filteringRules";
import { getProductsArray } from "../products";

export const getFilters = (state) => state.filters;

export const getProductsByFilters = createSelector(
  getProductsArray,
  getFilters,
  (products, rules) =>
    products.filter((product) => applyFilters(rules, product))
);

export const getFilteredProductsPriceRange = createSelector(
  getProductsByFilters,
  (filteredProducts) =>
    filteredProducts.length
      ? filteredProducts.reduce(
          ({ min, max }, { price }) => ({
            min: price < min ? price : min,
            max: price > max ? price : max,
          }),
          { min: Infinity, max: 0 }
        )
      : { min: 0, max: 0 }
);

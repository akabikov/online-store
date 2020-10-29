import { createSelector } from "reselect";
import { applyFilters } from "./filteringRules";
import { applySorting } from "./sortingRules";

const getProducts = (state) => state.products;
const getProductsArray = createSelector(getProducts, (products) =>
  Object.entries(products).map(([id, product]) => ({ id, ...product }))
);

export const getCompanies = createSelector(getProductsArray, (products) =>
  Array.from(new Set(products.map(({ company }) => company))).sort()
);

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

export const getSorting = (state) => state.sorting;

export const getSortedProducts = createSelector(
  getProductsByFilters,
  getSorting,
  (products, sorting) =>
    [...products].sort((current, next) => applySorting(current, next, sorting))
);

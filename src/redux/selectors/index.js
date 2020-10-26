import { createSelector } from "reselect";
import { applyFilters } from "./filteringRules";

const getProducts = (state) => state.products;
const getProductsArray = createSelector(getProducts, (products) =>
  Object.entries(products).map(([id, product]) => ({ id, ...product }))
);

export const getCompanies = createSelector(getProductsArray, (products) =>
  Array.from(new Set(products.map(({ company }) => company))).sort()
);

const getFilters = (state) => state.filters;

export const getProductsByFilters = createSelector(
  getProductsArray,
  getFilters,
  (products, rules) =>
    products.filter((product) => applyFilters(rules, product))
);

export const getFilteredProductsCompanies = createSelector(
  getProductsByFilters,
  (filteredProducts) => new Set(filteredProducts.map(({ company }) => company))
);

export const getFilteredProductsPriceRange = createSelector(
  getProductsByFilters,
  (filteredProducts) =>
    filteredProducts.reduce(
      ({ min, max }, { price }) => ({
        min: price < min ? price : min,
        max: price > max ? price : max,
      }),
      { min: Infinity, max: 0 }
    )
);

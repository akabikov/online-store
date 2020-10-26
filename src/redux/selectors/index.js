import { createSelector } from "reselect";
import { applyFilters } from "./filteringRules";

const getProducts = (state) => state.products;
const getProductsEntries = createSelector(getProducts, (products) =>
  Object.entries(products)
);

export const getCompanies = createSelector(
  getProductsEntries,
  (productsEntries) =>
    Array.from(
      new Set(productsEntries.map(([, { company }]) => company))
    ).sort()
);

const getFilters = (state) => state.filters;

export const getProductsByFilters = createSelector(
  getProductsEntries,
  getFilters,
  (productsEntries, rules) =>
    productsEntries
      .filter(([, product]) => applyFilters(rules, product))
      .map(([id, product]) => ({ id, ...product }))
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

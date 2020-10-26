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

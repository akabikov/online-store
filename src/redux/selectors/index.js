import { createSelector } from "reselect";
import { applyFilters } from "./filters";

const getProducts = (state) => state.products;
const getProductsEntries = createSelector(getProducts, (products) =>
  Object.entries(products)
);

export const getProductsByFilters = createSelector(
  getProductsEntries,
  (_, props) => props,
  (productsEntries, rules) => ({
    products: Object.fromEntries(
      productsEntries.filter(([, product]) => applyFilters(rules, product))
    ),
  })
);

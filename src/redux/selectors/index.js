import { createSelector } from "reselect";
import { applyFilters } from "./filters";

const getProducts = (state) => state.products;

export const getProductsByFilters = createSelector(
  getProducts,
  (_, props) => props,
  (products, rules) => ({
    products: Object.fromEntries(
      Object.entries(products).filter(([, product]) =>
        applyFilters(rules, product)
      )
    ),
  })
);

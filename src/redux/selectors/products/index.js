import { createSelector } from "reselect";

export const getProducts = (state) => state.products;
export const getProductsArray = createSelector(getProducts, (products) =>
  Object.entries(products).map(([id, product]) => ({ id, ...product }))
);

export const getProductById = (state, id) => getProducts(state)?.[id];

export const getCompanies = createSelector(getProductsArray, (products) =>
  Array.from(new Set(products.map(({ company }) => company))).sort()
);

export const getFeaturedProducts = createSelector(
  getProductsArray,
  (products) => products.filter(({ featured }) => featured)
);

import { createSelector } from "reselect";
import { getPublicUrl } from "../../../helpers/getPublicUrl";

export const getProducts = (state) => state.products;

export function _getProductById(products, id) {
  const product = products?.[id];
  return { ...product, imageUrl: getPublicUrl(product?.imageUrl) };
}

export const getProductById = (state, id) =>
  _getProductById(getProducts(state), id);

export const getProductsArray = createSelector(getProducts, (products) =>
  Object.keys(products).map((id) => ({
    id,
    ..._getProductById(products, id),
  }))
);

export const getCompanies = createSelector(getProductsArray, (products) =>
  Array.from(new Set(products.map(({ company }) => company))).sort()
);

export const getFeaturedProducts = createSelector(
  getProductsArray,
  (products) => products.filter(({ featured }) => featured)
);

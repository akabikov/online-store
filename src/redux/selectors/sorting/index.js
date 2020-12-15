import { createSelector } from "reselect";
import { applySorting } from "./sortingRules";
import { getProductsByFilters } from "../filters";

export const getSorting = (state) => state.sorting;

export const getSortedProducts = createSelector(
  getProductsByFilters,
  getSorting,
  (products, sorting) =>
    [...products].sort((current, next) => applySorting(current, next, sorting))
);

export const getPaginatedProducts = createSelector(
  getSortedProducts,
  (_, { itemsPerPage }) => itemsPerPage,
  (_, { pageNum }) => pageNum,
  (products, itemsPerPage, pageNum = 1) => {
    const safeItemsPerPage = itemsPerPage || products.length;
    const numOfPages = Math.ceil(products.length / safeItemsPerPage);
    const safePageNum =
      pageNum > numOfPages ? numOfPages : pageNum < 1 ? 1 : pageNum;
    const start = (safePageNum - 1) * safeItemsPerPage;
    const productsOfPage = products.slice(start, start + safeItemsPerPage);
    return { products: productsOfPage, numOfPages };
  }
);

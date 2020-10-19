import { createSelector } from "reselect";

const getProducts = (state) => state.products;

const companyList = (_, props) => props.companyList;

export const getProductsByCompany = createSelector(
  getProducts,
  companyList,
  (products, companyList) => ({
    products:
      companyList?.size > 0
        ? Object.keys(products).reduce((result, id) => {
            if (companyList.has(products[id].company))
              result[id] = products[id];
            return result;
          }, {})
        : products,
  })
);

const searchQuery = (_, props) => props.searchQuery;

export const getProductsBySearch = createSelector(
  getProducts,
  searchQuery,
  (products, query) => ({
    products:
      query?.length > 0
        ? Object.keys(products).reduce((result, id) => {
            if (products[id].title.includes(query)) result[id] = products[id];
            return result;
          }, {})
        : products,
  })
);

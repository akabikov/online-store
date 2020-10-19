import { createSelector } from "reselect";

const getProducts = (state) => state.products;

const companyList = (_, props) => props.companyList;

const getProductsByCompany = createSelector(
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

export { getProductsByCompany };

const filters = {
  company: {
    validateFilter: (companyList) => companyList?.size > 0,
    applyFilter: (companyList, product) => companyList.has(product?.company),
  },
  price: {
    validateFilter: (price) => price?.max > 0 && price?.min <= price?.max,
    applyFilter: (price, product) =>
      +product?.price >= price?.min && +product?.price <= price?.max,
  },
  search: {
    validateFilter: (query) => query?.length > 0,
    applyFilter: (query, product) => product?.title.includes(query),
  },
};

export const applyFilters = (rules, product) =>
  Object.entries(rules).reduce(
    (commonCondition, [ruleName, ruleValue]) =>
      commonCondition && filters[ruleName]?.applyFilter(ruleValue, product),
    true
  );

const rules = {
  company: (companyList, { company }) =>
    !Object.keys(companyList).length || companyList[company],
  price: ({ min = 0, max }, { price }) =>
    +price >= +min && +price <= (+max || Infinity),
  search: ({ query }, { title }) => !query || title.includes(query),
};

export const applyFilters = (filters, product) =>
  Object.entries(filters).reduce(
    (commonCondition, [filterName, filterValue]) =>
      commonCondition && rules[filterName]?.(filterValue, product),
    true
  );

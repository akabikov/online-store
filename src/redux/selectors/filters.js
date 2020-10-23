const filters = {
  company: (companyList, { company }) =>
    !Object.keys(companyList).length || companyList[company],
  price: ({ min, max }, { price }) =>
    +price >= +min && +price <= (+max || Infinity),
  search: (query, { title }) => !query || title.includes(query),
};

export const applyFilters = (rules, product) =>
  Object.entries(rules).reduce(
    (commonCondition, [ruleName, ruleValue]) =>
      commonCondition && filters[ruleName]?.(ruleValue, product),
    true
  );

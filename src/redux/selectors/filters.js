const filters = {
  company: (companyList, { company }) =>
    companyList.has(company) || companyList.size > 0,
  price: ({ min = 0, max = Infinity }, { price }) =>
    +price >= min && +price <= max,
  search: (query, { title }) => title.includes(query),
};

export const applyFilters = (rules, product) =>
  Object.entries(rules).reduce(
    (commonCondition, [ruleName, ruleValue]) =>
      commonCondition && filters[ruleName]?.(ruleValue, product),
    true
  );

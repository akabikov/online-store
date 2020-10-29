const sortingRules = {
  default: {
    default: () => 0,
  },
  price: {
    ascending: (current, next) => current - next,
    descending: (current, next) => next - current,
  },
  company: {
    ascending: (current, next) =>
      current > next ? 1 : current < next ? -1 : 0,
    descending: (current, next) =>
      next > current ? 1 : next < current ? -1 : 0,
  },
};

export const applySorting = (current, next, { orderBy, direction }) =>
  sortingRules[orderBy]?.[direction]?.(current?.[orderBy], next?.[orderBy]);

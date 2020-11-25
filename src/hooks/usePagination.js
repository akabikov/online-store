import { useSelector } from "react-redux";
import useQuery from "./useQuery";

const DEFAULT_PAGE = 1;
const DEFAULT_ITEMS = 5;

function usePagination(selector) {
  const query = useQuery();

  const itemsPerPage = Number(query.get("items") ?? DEFAULT_ITEMS);

  const { numOfPages } = useSelector((state) =>
    selector(state, { itemsPerPage })
  );

  const queryPage = Number(query.get("page")) || DEFAULT_PAGE;
  const page = queryPage > numOfPages ? numOfPages : queryPage;

  const { products } = useSelector((state) =>
    selector(state, { itemsPerPage, pageNum: page })
  );

  const setItemsPerPage = (items) => query.push({ items, page: DEFAULT_PAGE });
  const switchPage = (page) => query.set({ page });

  return {
    itemsPerPage,
    setItemsPerPage,
    numOfPages,
    page,
    switchPage,
    products,
  };
}

export default usePagination;

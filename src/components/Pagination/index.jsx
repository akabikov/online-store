import React from "react";
import { useSelector } from "react-redux";
import useQuery from "../../hooks/useQuery";
import PageSwitcher from "./PageSwitcher";
import ItemsPerPageSelector from "./ItemsPerPageSelector";

const DEFAULT_PAGE = 1;
const DEFAULT_ITEMS = 5;

const withPagination = (ListComponent, selector) => (props) => {
  const query = useQuery();

  let page = Number(query.get("page")) || DEFAULT_PAGE;
  const itemsPerPage = Number(query.get("items") ?? DEFAULT_ITEMS);

  const { products, numOfPages } = useSelector((state) =>
    selector(state, { itemsPerPage, pageNum: page })
  );

  page = page > numOfPages ? numOfPages : page;

  return (
    <>
      <ItemsPerPageSelector
        itemsPerPage={itemsPerPage}
        setItemsPerPage={(items) => query.push({ items, page: DEFAULT_PAGE })}
      />
      <ListComponent products={products} {...props} />
      <PageSwitcher
        numOfPages={numOfPages}
        currentPage={page}
        switchPage={(page) => query.set({ page })}
      />
    </>
  );
};

export default withPagination;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import PageSwitcher from "./PageSwitcher";
import ItemsPerPageSelector from "./ItemsPerPageSelector";

const config = {
  itemsPerPage: [3, 4, 5, 10, 20, 0],
  defaultItemsPerPage: 5,
  startPage: 1,
};

const withPagination = (ListComponent, selector) => (props) => {
  const [itemsPerPage, setItemsPerPage] = useState(config.defaultItemsPerPage);
  const [page, setPage] = useState(config.startPage);

  const { products, numOfPages } = useSelector((state) =>
    selector(state, { itemsPerPage, pageNum: page })
  );

  return (
    <>
      <ItemsPerPageSelector
        listOfItemsPerPage={config.itemsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <ListComponent products={products} {...props} />
      <PageSwitcher
        numOfPages={numOfPages}
        currentPage={page}
        switchPage={setPage}
      />
    </>
  );
};

export default withPagination;

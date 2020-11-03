import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import PageSwitcher from "./PageSwitcher";
import ItemsPerPageSelector from "./ItemsPerPageSelector";

const initState = {
  itemsPerPage: 5,
  page: 1,
};

const reducer = (state, action) =>
  ({
    itemsPerPage: { itemsPerPage: action.payload, page: 1 },
    page: { ...state, page: action.payload },
  }?.[action.type]);

const withPagination = (ListComponent, selector) => (props) => {
  const [{ itemsPerPage, page }, dispatch] = useReducer(reducer, initState);

  const { products, numOfPages } = useSelector((state) =>
    selector(state, { itemsPerPage, pageNum: page })
  );

  return (
    <>
      <ItemsPerPageSelector
        itemsPerPage={itemsPerPage}
        setItemsPerPage={(n) => dispatch({ type: "itemsPerPage", payload: n })}
      />
      <ListComponent products={products} {...props} />
      <PageSwitcher
        numOfPages={numOfPages}
        currentPage={page}
        switchPage={(page) => dispatch({ type: "page", payload: page })}
      />
    </>
  );
};

export default withPagination;

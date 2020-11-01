import React, { useState } from "react";
import Pagination from "./Pagination";

function PaginationWrapper(params) {
  const [numOfPages, setNumOfPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const itemsPerPageOptions = [3, 4, 5, 10, 20, 0].map((el) => (
    <option key={el} value={el}>
      {el || "all"}
    </option>
  ));

  const pageSwitcher =
    numOfPages === 1 ||
    [...Array(numOfPages)].map((_, i, arr) => (
      <React.Fragment key={i}>
        <button onClick={() => setPage(i + 1)}>{i + 1}</button>
        {i === arr.length - 1 || ", "}
      </React.Fragment>
    ));

  return (
    <>
      <div>
        <label>
          {"Show "}
          <select
            value={itemsPerPage}
            onChange={({ target }) => setItemsPerPage(Number(target.value))}
          >
            {itemsPerPageOptions}
          </select>{" "}
          {" items per page"}
        </label>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        pageNum={page}
        setNumOfPages={setNumOfPages}
      />
      {pageSwitcher}
    </>
  );
}

export default PaginationWrapper;

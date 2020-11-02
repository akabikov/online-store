import React from "react";

function PageSwitcher({ numOfPages, currentPage, switchPage }) {
  const pageSwitcher =
    numOfPages === 1 ||
    [...Array(numOfPages)].map((_, i, arr) => (
      <React.Fragment key={i}>
        <button onClick={() => switchPage(i + 1)}>{i + 1}</button>
        {i === arr.length - 1 || ", "}
      </React.Fragment>
    ));

  return <>{pageSwitcher}</>;
}

export default PageSwitcher;

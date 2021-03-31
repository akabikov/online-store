import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function PageSwitcher({ numOfPages, currentPage, switchPage }) {
  const pageLink = (page, title, icon) => (
    <Link
      to={switchPage(page)}
      title={currentPage !== page ? title : undefined}
    >
      {icon || page}
    </Link>
  );

  const pages =
    numOfPages > 1 &&
    [...Array(numOfPages)].map((_, i) => {
      const page = i + 1;
      return (
        <li
          key={page}
          className={page === currentPage ? "current-page" : undefined}
        >
          {pageLink(page, `Go to page ${page}`)}
        </li>
      );
    });

  const getEdgeLink = (excludedPage, name, page, icon) =>
    numOfPages > 1 && (
      <li className={!(currentPage - excludedPage) ? "disabled" : undefined}>
        {pageLink(page, `Go to the ${name} page`, icon)}
      </li>
    );

  const prev = getEdgeLink(
    1,
    "previous",
    currentPage - 1,
    <i className='zmdi zmdi-chevron-left'></i>
  );
  const next = getEdgeLink(
    numOfPages,
    "next",
    currentPage + 1,
    <i className='zmdi zmdi-chevron-right'></i>
  );
  // const first = getEdgeLink(1, "first", 1, "<<");
  // const last = getEdgeLink(numOfPages, "last", numOfPages, ">>");

  return (
    <ul className='PageSwitcher'>
      {prev} {pages} {next}
    </ul>
  );
}

export default PageSwitcher;

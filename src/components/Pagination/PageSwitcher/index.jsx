import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function PageSwitcher({ numOfPages, currentPage, switchPage }) {
  const pageLink = (page, title, icon) => (
    <NavLink
      to={switchPage(page)}
      isActive={() => currentPage === page}
      activeClassName='current-page'
      title={currentPage !== page && title}
    >
      {icon || page}
    </NavLink>
  );

  const pages =
    numOfPages > 1 &&
    [...Array(numOfPages)].map((_, idx) => {
      const i = idx + 1;
      return (
        <li key={i}>
          {pageLink(i, `Go to page ${i}`)}
          {i === numOfPages || ", "}
        </li>
      );
    });

  const getEdgeLink = (excludedPage, name, page, icon) =>
    Boolean(currentPage - excludedPage) && (
      <li>{pageLink(page, `Go to the ${name} page`, icon)}</li>
    );

  const first = getEdgeLink(1, "first", 1, "<<");
  const prev = getEdgeLink(1, "previous", currentPage - 1, "<");
  const next = getEdgeLink(numOfPages, "next", currentPage + 1, ">");
  const last = getEdgeLink(numOfPages, "last", numOfPages, ">>");

  return (
    <ul className='PageSwitcher'>
      {first} {prev} {pages} {next} {last}
    </ul>
  );
}

export default PageSwitcher;

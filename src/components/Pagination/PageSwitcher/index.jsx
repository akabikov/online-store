import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function PageSwitcher({ numOfPages, currentPage, switchPage }) {
  const pageLink = (page, title) => (
    <NavLink
      to={switchPage(page)}
      isActive={() => currentPage === page}
      activeStyle={{ textDecoration: "none" }}
    >
      {title || page}
    </NavLink>
  );

  const pages =
    numOfPages > 1 &&
    [...Array(numOfPages)].map((_, idx) => {
      const i = idx + 1;
      return (
        <li key={i}>
          {pageLink(i)}
          {i === numOfPages || ", "}
        </li>
      );
    });

  const first = currentPage > 1 && <li>{pageLink(1, "<<")}</li>;
  const prev = currentPage > 1 && <li>{pageLink(currentPage - 1, "<")}</li>;
  const next = currentPage < numOfPages && (
    <li>{pageLink(currentPage + 1, ">")}</li>
  );
  const last = currentPage < numOfPages && (
    <li>{pageLink(numOfPages, ">>")}</li>
  );

  return (
    <ul className='PageSwitcher'>
      {first} {prev} {pages} {next} {last}
    </ul>
  );
}

export default PageSwitcher;

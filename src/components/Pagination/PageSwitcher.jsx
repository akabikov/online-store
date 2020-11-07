import React from "react";
import { NavLink } from "react-router-dom";

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
        <React.Fragment key={i}>
          {pageLink(i)}
          {i === numOfPages || ", "}
        </React.Fragment>
      );
    });

  const first = currentPage > 1 && pageLink(1, "<<");
  const prev = currentPage > 1 && pageLink(currentPage - 1, "<");
  const next = currentPage < numOfPages && pageLink(currentPage + 1, ">");
  const last = currentPage < numOfPages && pageLink(numOfPages, ">>");

  return (
    <div>
      {first} {prev} {pages} {next} {last}
    </div>
  );
}

export default PageSwitcher;

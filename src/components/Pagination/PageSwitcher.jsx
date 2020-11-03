import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

const getPageUrl = (n) => ({ search: `?page=${n}` });

function PageSwitcher({ numOfPages, currentPage, switchPage }) {
  const urlPage = Number(useQuery().get("page"));
  let history = useHistory();

  useEffect(() => {
    if (urlPage !== currentPage) history.push(getPageUrl(currentPage));
  }, [urlPage, currentPage]);

  const pageLink = (page, title) => (
    <NavLink
      to={getPageUrl(page)}
      isActive={() => urlPage === page}
      activeStyle={{ textDecoration: "none" }}
      onClick={() => switchPage(page)}
    >
      {title || page}
    </NavLink>
  );

  const pages =
    numOfPages === 1 ||
    Array.from(Array(numOfPages), (_, i) => ++i).map((i) => (
      <React.Fragment key={i}>
        {pageLink(i)}
        {i === numOfPages || ", "}
      </React.Fragment>
    ));

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

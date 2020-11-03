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

  const pageSwitcher =
    numOfPages === 1 ||
    Array.from(Array(numOfPages), (_, i) => ++i).map((i) => (
      <React.Fragment key={i}>
        <NavLink
          to={getPageUrl(i)}
          isActive={() => urlPage === i}
          activeStyle={{ textDecoration: "none" }}
          onClick={() => switchPage(i)}
        >
          {i}
        </NavLink>
        {i === numOfPages || ", "}
      </React.Fragment>
    ));

  return <div>{pageSwitcher}</div>;
}

export default PageSwitcher;

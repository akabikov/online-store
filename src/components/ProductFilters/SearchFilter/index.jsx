import React from "react";
import "./style.scss";

const FILTER_NAME = "search";

function SearchFilter({ search, setFilter }) {
  return (
    <div>
      <label htmlFor='search'>Search</label>
      <input
        type='search'
        name='search'
        id='search'
        value={search?.query || ""}
        onChange={({ target: { value } }) =>
          setFilter(FILTER_NAME, { query: value })
        }
      />
    </div>
  );
}

export default SearchFilter;

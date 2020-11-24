import React from "react";
import "./style.scss";

const FILTER_NAME = "search";

function SearchFilter({ search, setFilter }) {
  return (
    <div>
      <input
        type='search'
        name='search'
        id='search'
        placeholder='Search...'
        inputMode='search'
        value={search?.query || ""}
        onChange={({ target: { value } }) =>
          setFilter(FILTER_NAME, { query: value })
        }
      />
    </div>
  );
}

export default SearchFilter;

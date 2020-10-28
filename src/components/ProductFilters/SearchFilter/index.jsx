import React from "react";
import "./style.scss";

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
          setFilter("search", { query: value })
        }
      />
    </div>
  );
}

export default SearchFilter;

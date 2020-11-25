import React from "react";
import "./style.scss";

const FILTER_NAME = "search";

function SearchFilter({ search, setFilter }) {
  return (
    <fieldset className='SearchFilter'>
      <legend>Search</legend>
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
    </fieldset>
  );
}

export default SearchFilter;

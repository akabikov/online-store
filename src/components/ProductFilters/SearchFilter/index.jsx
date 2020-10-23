import React, { useState, useEffect } from "react";
import "./style.scss";

function SearchFilter({ updateFilters }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    updateFilters({ search: query });
  }, [query, updateFilters]);

  return (
    <div>
      <label htmlFor='search'>Search</label>
      <input
        type='search'
        name='search'
        id='search'
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
      />
    </div>
  );
}

export default SearchFilter;

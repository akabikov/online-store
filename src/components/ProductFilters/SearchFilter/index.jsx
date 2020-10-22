import React, { useState } from "react";
import "./style.scss";

function SearchFilter(props) {
  const [query, setQuery] = useState("");
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

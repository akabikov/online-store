import React, { useState, useEffect } from "react";
import "./style.scss";

function PriceFilter({ updateFilters }) {
  const [price, setPrice] = useState({ min: "", max: "" });

  useEffect(() => {
    updateFilters({
      price: { min: Number(price.min), max: Number(price.max) },
    });
  }, [price, updateFilters]);

  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor='price-min'>from</label>
      <input
        type='number'
        name='price-min'
        id='price-min'
        min='0'
        value={price.min}
        onChange={({ target: { value } }) => setPrice({ ...price, min: value })}
      />
      <label htmlFor='price-max'>to</label>
      <input
        type='number'
        name='price-max'
        id='price-max'
        min='0'
        value={price.max}
        onChange={({ target: { value } }) => setPrice({ ...price, max: value })}
      />
    </fieldset>
  );
}

export default PriceFilter;

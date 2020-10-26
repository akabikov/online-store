import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getFilteredProductsPriceRange } from "../../../redux/selectors";
import "./style.scss";

function PriceFilter({ availableRange, updateFilters }) {
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
        placeholder={availableRange.min}
        value={price.min}
        onChange={({ target: { value } }) => setPrice({ ...price, min: value })}
      />
      <label htmlFor='price-max'>to</label>
      <input
        type='number'
        name='price-max'
        id='price-max'
        min='0'
        placeholder={availableRange.max}
        value={price.max}
        onChange={({ target: { value } }) => setPrice({ ...price, max: value })}
      />
    </fieldset>
  );
}

const mapStateToProps = (state) => ({
  availableRange: getFilteredProductsPriceRange(state),
});

export default connect(mapStateToProps)(PriceFilter);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getFilteredProductsPriceRange } from "../../../redux/selectors";
import "./style.scss";

const INIT_STATE = { min: "", max: "" };

function PriceFilter({ availableRange, updateFilters }) {
  const [price, setPrice] = useState(INIT_STATE);

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
        placeholder={availableRange.min || ""}
        value={price.min}
        onChange={({ target: { value } }) => setPrice({ ...price, min: value })}
      />
      <label htmlFor='price-max'>to</label>
      <input
        type='number'
        name='price-max'
        id='price-max'
        min='0'
        placeholder={availableRange.max || ""}
        value={price.max}
        onChange={({ target: { value } }) => setPrice({ ...price, max: value })}
      />
      <button type='reset' onClick={() => setPrice(INIT_STATE)}>
        Reset
      </button>
    </fieldset>
  );
}

const mapStateToProps = (state) => ({
  availableRange: getFilteredProductsPriceRange(state),
});

export default connect(mapStateToProps)(PriceFilter);

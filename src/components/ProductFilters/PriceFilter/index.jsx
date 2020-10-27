import React from "react";
import { connect } from "react-redux";
import { getFilteredProductsPriceRange } from "../../../redux/selectors";
import "./style.scss";

function PriceFilter({ availableRange, price, setFilter }) {
  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor='price-min'>from</label>
      <input
        type='number'
        id='price-min'
        min='0'
        placeholder={availableRange?.min || ""}
        value={price?.min || ""}
        onChange={({ target: { value } }) =>
          setFilter("price", { ...price, min: value })
        }
      />
      <label htmlFor='price-max'>to</label>
      <input
        type='number'
        id='price-max'
        min='0'
        placeholder={availableRange?.max || ""}
        value={price?.max || ""}
        onChange={({ target: { value } }) =>
          setFilter("price", { ...price, max: value })
        }
      />
      <input
        type='button'
        value='Reset'
        onClick={() => setFilter("price", {})}
      />
    </fieldset>
  );
}

const mapStateToProps = (state) => ({
  availableRange: getFilteredProductsPriceRange(state),
});

export default connect(mapStateToProps)(PriceFilter);

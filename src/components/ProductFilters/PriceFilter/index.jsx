import React from "react";
import { connect } from "react-redux";
import { getFilteredProductsPriceRange } from "../../../redux/selectors";
import "./style.scss";

const FILTER_NAME = "price";

function PriceFilter({ availableRange, price, setFilter }) {
  const fields = [
    ["from", "min"],
    ["to", "max"],
  ].map(([label, minMax]) => (
    <label key={minMax}>
      {label}
      <input
        type='number'
        id={`price-${minMax}`}
        min='0'
        placeholder={availableRange?.[minMax] || ""}
        value={price?.[minMax] || ""}
        onChange={({ target: { value } }) =>
          setFilter(FILTER_NAME, { ...price, [minMax]: value })
        }
      />
    </label>
  ));

  return (
    <fieldset>
      {fields}
      <input
        type='button'
        value='Reset'
        onClick={() => setFilter(FILTER_NAME, {})}
      />
    </fieldset>
  );
}

const mapStateToProps = (state) => ({
  availableRange: getFilteredProductsPriceRange(state),
});

export default connect(mapStateToProps)(PriceFilter);

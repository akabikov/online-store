import React from "react";
import { connect } from "react-redux";
import { getFilteredProductsPriceRange } from "../../../redux/selectors/filters";
import "./style.scss";

const FILTER_NAME = "price";

function PriceFilter({ availableRange, price, setFilter }) {
  const rangeField = (minMax) => (
    <input
      type='search'
      inputMode='numeric'
      aria-label={`price-${minMax}`}
      placeholder={availableRange?.[minMax] || ""}
      title={`${minMax} price`}
      value={price?.[minMax] || ""}
      onChange={({ target: { value } }) => {
        if (!Number.isNaN(Number(value))) {
          setFilter(FILTER_NAME, {
            ...price,
            [minMax]: Number(value),
          });
        }
      }}
    />
  );

  return (
    <fieldset className='PriceFilter'>
      <legend>Price</legend>
      <div>{rangeField("min")}</div>
      <div className='price-range-delimiter'> - </div>
      <div>{rangeField("max")}</div>
    </fieldset>
  );
}

const mapStateToProps = (state) => ({
  availableRange: getFilteredProductsPriceRange(state),
});

export default connect(mapStateToProps)(PriceFilter);

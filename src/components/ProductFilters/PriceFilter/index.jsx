import React from "react";
import { connect } from "react-redux";
import { getFilteredProductsPriceRange } from "../../../redux/selectors";
import "./style.scss";

const FILTER_NAME = "price";

function PriceFilter({ availableRange, price, setFilter }) {
  const fields = [
    ["min", " - "],
    ["max", ""],
  ].map(([minMax, delimiter]) => (
    <React.Fragment key={minMax}>
      <input
        type='search'
        inputMode='numeric'
        aria-label={minMax}
        id={`price-${minMax}`}
        placeholder={availableRange?.[minMax] || ""}
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
      {delimiter}
    </React.Fragment>
  ));

  return <fieldset>{fields}</fieldset>;
}

const mapStateToProps = (state) => ({
  availableRange: getFilteredProductsPriceRange(state),
});

export default connect(mapStateToProps)(PriceFilter);

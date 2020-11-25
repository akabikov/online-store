import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateSorting } from "../../redux/actions";
import { DEFAULT_SORT } from "../../redux/reducers/sorting";
import "./style.scss";

function ProductsSorting({ updateSorting }) {
  const [sorting, setSorting] = useState(DEFAULT_SORT);

  useEffect(() => {
    updateSorting(sorting);
  }, [sorting, updateSorting]);

  const handleChange = ({ orderBy, direction }) =>
    setSorting((sorting) => ({
      orderBy: orderBy || sorting.orderBy,
      direction: direction || (isDefault(orderBy) ? "default" : "ascending"),
    }));

  const { orderBy, direction } = sorting;

  return (
    <form className='ProductsSorting'>
      <label htmlFor='order-by'>Order by: </label>
      <select
        id='order-by'
        value={orderBy}
        onChange={({ target }) => handleChange({ orderBy: target.value })}
      >
        <option value='default'>default</option>
        <option value='price'>price</option>
        <option value='company'>company</option>
      </select>
      <button
        type='button'
        disabled={isDefault(orderBy)}
        onClick={() =>
          handleChange({
            direction: direction === "ascending" ? "descending" : "ascending",
          })
        }
      >
        <i className='zmdi zmdi-swap-vertical'></i>
      </button>
    </form>
  );
}

function isDefault(value) {
  return value === "default";
}

export default connect(null, { updateSorting })(ProductsSorting);

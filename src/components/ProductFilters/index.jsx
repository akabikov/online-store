import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateFilters } from "../../redux/actions";
import { getFilters } from "../../redux/selectors";
import SearchFilter from "./SearchFilter";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import "./style.scss";

function ProductFilters({ storeFilters, updateFilters }) {
  const [filters, setFilters] = useState(storeFilters);

  useEffect(() => {
    updateFilters(filters);
  }, [filters, updateFilters]);

  const setFilter = (filterName, filterValue) =>
    setFilters((filters) => ({ ...filters, [filterName]: filterValue }));

  const resetAll = () =>
    setFilters(
      Object.keys(filters).reduce((acc, el) => ({ ...acc, [el]: {} }), {})
    );

  return (
    <form>
      Filters
      <SearchFilter {...filters} setFilter={setFilter} />
      <PriceFilter {...filters} setFilter={setFilter} />
      <BrandFilter {...filters} setFilter={setFilter} />
      <button type='reset' onClick={resetAll}>
        Reset all filters
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({ storeFilters: getFilters(state) });

export default connect(mapStateToProps, { updateFilters })(ProductFilters);

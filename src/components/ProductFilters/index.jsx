import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { updateFilters } from "../../redux/actions";
import { getFilters } from "../../redux/selectors";
import debounce from "../../helpers/debounce";
import objectFromArray from "../../helpers/objectFromArray";
import SearchFilter from "./SearchFilter";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import Button from "../Button";
import "./style.scss";

const FILTERING_DELAY = 1000; // ms

function ProductFilters({ storeFilters, updateFilters }) {
  const [filters, setFilters] = useState(storeFilters);

  const debouncedFilterUpdate = useCallback(
    debounce((filters) => updateFilters(filters), FILTERING_DELAY),
    []
  );

  useEffect(() => {
    debouncedFilterUpdate(filters);
  }, [filters, debouncedFilterUpdate]);

  const setFilter = (filterName, filterValue) =>
    setFilters((filters) => ({ ...filters, [filterName]: filterValue }));

  const resetAll = () => setFilters(objectFromArray(Object.keys(filters), {}));

  return (
    <form className='ProductFilters'>
      <div className='product-filters'>
        <SearchFilter {...filters} setFilter={setFilter} />
        <PriceFilter {...filters} setFilter={setFilter} />
        <BrandFilter {...filters} setFilter={setFilter} />
      </div>
      <Button type='reset' text='Reset all' onClick={resetAll} />
    </form>
  );
}

const mapStateToProps = (state) => ({ storeFilters: getFilters(state) });

export default connect(mapStateToProps, { updateFilters })(ProductFilters);

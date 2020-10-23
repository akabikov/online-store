import React from "react";
import { connect } from "react-redux";
import { updateFilters } from "../../redux/actions";
import SearchFilter from "./SearchFilter";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import "./style.scss";

function ProductFilters({ updateFilters }) {
  return (
    <form>
      Filters
      <SearchFilter updateFilters={updateFilters} />
      <PriceFilter updateFilters={updateFilters} />
      <BrandFilter updateFilters={updateFilters} />
    </form>
  );
}

export default connect(null, { updateFilters })(ProductFilters);

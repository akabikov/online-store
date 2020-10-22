import React from "react";
import SearchFilter from "./SearchFilter";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import "./style.scss";

function ProductFilters(props) {
  return (
    <form>
      Filters
      <SearchFilter />
      <PriceFilter />
      <BrandFilter />
    </form>
  );
}

export default ProductFilters;

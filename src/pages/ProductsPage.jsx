import React, { useEffect } from "react";
import { connect } from "react-redux";
import PaginationWrapper from "../components/ProductList/PaginationWrapper";
import ProductFilters from "../components/ProductFilters";
import ProductsSorting from "../components/ProductsSorting";
import { loadProducts } from "../redux/actions";

function ProductsPage({ loadProducts }) {
  useEffect(() => {
    const fetchProducts = async () => await loadProducts();
    fetchProducts();
  }, [loadProducts]);

  return (
    <div>
      <ProductFilters />
      <ProductsSorting />
      <PaginationWrapper />
    </div>
  );
}

export default connect(null, { loadProducts })(ProductsPage);

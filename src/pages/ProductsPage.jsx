import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductFilters from "../components/ProductFilters";
import ProductsSorting from "../components/ProductsSorting";
import ProductList from "../components/ProductList";
import withPagination from "../components/Pagination";
import { getPaginatedProducts } from "../redux/selectors";
import { loadProducts } from "../redux/actions";

const ProductListWithPagination = withPagination(
  ProductList,
  getPaginatedProducts
);

function ProductsPage({ loadProducts }) {
  useEffect(() => {
    const fetchProducts = async () => await loadProducts();
    fetchProducts();
  }, [loadProducts]);

  return (
    <div>
      <ProductFilters />
      <ProductsSorting />
      <ProductListWithPagination />
    </div>
  );
}

export default connect(null, { loadProducts })(ProductsPage);

import React from "react";
import ProductFilters from "../components/ProductFilters";
import ProductsSorting from "../components/ProductsSorting";
import ProductList from "../components/ProductList";
import withPagination from "../components/Pagination";
import { getPaginatedProducts } from "../redux/selectors";

const ProductListWithPagination = withPagination(
  ProductList,
  getPaginatedProducts
);

function ProductsPage() {
  return (
    <div>
      <ProductFilters />
      <ProductsSorting />
      <ProductListWithPagination />
    </div>
  );
}

export default ProductsPage;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductList from "../components/ProductList";
import ProductFilters from "../components/ProductFilters";
import ProductsSorting from "../components/ProductsSorting";
import { loadProducts } from "../redux/actions";
import { getSortedProducts } from "../redux/selectors";

function ProductsPage({ loadProducts, products }) {
  useEffect(() => {
    const fetchProducts = async () => await loadProducts();
    fetchProducts();
  }, [loadProducts]);

  return (
    <div>
      <ProductFilters />
      <ProductsSorting />
      <ProductList products={products} />
    </div>
  );
}

const mapStateToProps = (state) => ({ products: getSortedProducts(state) });

export default connect(mapStateToProps, { loadProducts })(ProductsPage);

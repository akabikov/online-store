import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import { loadProducts, add } from "../redux/actions";
import { getProductsByFilters } from "../redux/selectors";
import "./ProductPage.scss";

function ProductsPage({ loadProducts, products, add }) {
  useEffect(() => {
    const fetchProducts = async () => await loadProducts();
    fetchProducts();
  }, [loadProducts]);

  const productList =
    products &&
    Object.entries(products).map(([id, product]) => (
      <ProductCard key={id} id={id} {...product} add={add} />
    ));

  return (
    <div>
      <ProductFilters />
      <ul className='product-list'>{productList}</ul>
    </div>
  );
}

const mapStateToProps = (state) =>
  getProductsByFilters(state, {
    company: new Set(["samsung", "htc"]),
    price: { min: 20, max: 50 },
    search: "black",
  });

export default connect(mapStateToProps, { loadProducts, add })(ProductsPage);

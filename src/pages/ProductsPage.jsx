import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";
import { loadProducts, add } from "../redux/actions";
import { getProductsByCompany, getProductsBySearch } from "../redux/selectors";
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
      <ul className='product-list'>{productList}</ul>
    </div>
  );
}

const mapStateToProps = (state) =>
  getProductsBySearch(state, { searchQuery: "camera" });
// getProductsByCompany(state, { companyList: new Set(["samsung", "htc"]) });

export default connect(mapStateToProps, { loadProducts, add })(ProductsPage);

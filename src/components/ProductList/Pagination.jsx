import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getPaginatedProducts } from "../../redux/selectors";
import ProductList from "./";

function Pagination({ products, numOfPages, setNumOfPages }) {
  useEffect(() => setNumOfPages(numOfPages), [numOfPages, setNumOfPages]);
  return <ProductList products={products} />;
}

const mapStateToProps = (state, ownProps) =>
  getPaginatedProducts(state, ownProps);

export default connect(mapStateToProps)(Pagination);

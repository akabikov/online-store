import React from "react";
import { connect } from "react-redux";
import { add } from "../../redux/actions";
import ProductCard from "./ProductCard";
import "./style.scss";

function ProductList({ products }) {
  const productList =
    products &&
    products.map(({ id, ...product }) => (
      <ProductCard key={id} id={id} {...product} add={add} />
    ));

  return <ul className='product-list'>{productList}</ul>;
}

export default connect(null, { add })(ProductList);

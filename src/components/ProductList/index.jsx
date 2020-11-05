import React from "react";
import ProductCard from "./ProductCard";
import "./style.scss";

function ProductList({ products }) {
  const productList = products?.length
    ? products.map(({ id, ...product }) => (
        <ProductCard key={id} id={id} {...product} />
      ))
    : null;

  return <ul className='product-list'>{productList}</ul>;
}

export default ProductList;

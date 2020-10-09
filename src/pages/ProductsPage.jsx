import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions";

function ProductsPage({ loadProducts, products }) {
  useEffect(() => {
    const fetchProducts = async () => await loadProducts();
    fetchProducts();
  }, []);

  const productList = Object.entries(products).map(([id, product]) => (
    <li key={id}>{product.title}</li>
  ));

  return (
    <div>
      <ul>{productList}</ul>
    </div>
  );
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { loadProducts })(ProductsPage);

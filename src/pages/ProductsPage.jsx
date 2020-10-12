import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions";
import "./ProductPage.scss";

function ProductsPage({ loadProducts, products }) {
  useEffect(() => {
    const fetchProducts = async () => await loadProducts();
    fetchProducts();
  }, [loadProducts]);

  const productList = Object.entries(products).map(([id, product]) => (
    <li key={id} className='product-card'>
      <div className='product-card__img-box'>
        <img src={`./${product.imageUrl}`} alt={product.title} />
      </div>
      <div className='product-card__footer'>
        <p className='product-title'>{product.title}</p>
        <p className='product-price'>{product.price}</p>
        <button>Buy</button>
      </div>
    </li>
  ));

  return (
    <div>
      <ul className='product-list'>{productList}</ul>
    </div>
  );
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { loadProducts })(ProductsPage);

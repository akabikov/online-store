import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../../redux/actions";
import "./style.scss";

function ProductCard({ id, title, imageUrl, price }) {
  const dispatch = useDispatch();

  return (
    <li className='ProductCard'>
      <Link to={`products/${id}`} className='product-card__img-box'>
        <img src={`./${imageUrl}`} alt={title} />
      </Link>
      <Link to={`products/${id}`} className='product-title'>
        {title}
      </Link>
      <div className='product-price'>{price}</div>
      <button
        title='Add to cart'
        className='product-card__add-button'
        onClick={() => dispatch(add(id))}
      >
        Add to cart <i className='zmdi zmdi-shopping-cart-plus'></i>
      </button>
    </li>
  );
}

export default ProductCard;

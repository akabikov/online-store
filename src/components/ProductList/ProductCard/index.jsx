import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../../redux/actions";
import Button from "../../Button";
import "./style.scss";

function ProductCard({ id, title, imageUrl, price }) {
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(add(id));

  return (
    <li className='ProductCard'>
      <Link to={`products/${id}`} className='product-card__img-box'>
        <img src={imageUrl} alt={title} />
      </Link>
      <Link to={`products/${id}`} className='product-title'>
        {title}
      </Link>
      <div className='product-price'>{price}</div>
      <div className='product-card__add-button'>
        <Button
          text='Add to cart '
          icon='zmdi zmdi-shopping-cart-plus'
          title='Add to cart'
          onClick={handleAdd}
        />
      </div>
    </li>
  );
}

export default ProductCard;

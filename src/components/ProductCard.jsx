import React from "react";
import "./ProductCard.scss";

function ProductCard({ id, title, imageUrl, price, add }) {
  const handleAdd = (evt) => {
    evt.preventDefault();
    add(id);
  };

  return (
    <li className='product-card'>
      <div className='product-card__img-box'>
        <img src={`./${imageUrl}`} alt={title} />
      </div>
      <div className='product-card__footer'>
        <p className='product-title'>{title}</p>
        <p className='product-price'>{price}</p>
        <button onClick={handleAdd}>Buy</button>
      </div>
    </li>
  );
}

export default ProductCard;

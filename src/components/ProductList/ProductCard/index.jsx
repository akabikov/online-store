import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

function ProductCard({ id, title, imageUrl, price, add }) {
  const handleAdd = (evt) => {
    evt.preventDefault();
    add(id);
  };

  const history = useHistory();
  const handleView = () => history.push(`products/${id}`);

  return (
    <li className='product-card'>
      <div className='product-card__img-box'>
        <img src={`./${imageUrl}`} alt={title} />
      </div>
      <div className='product-card__footer'>
        <p className='product-title'>{title}</p>
        <p className='product-price'>{price}</p>
        <button onClick={handleAdd}>Buy</button>
        <button onClick={handleView}>View</button>
      </div>
    </li>
  );
}

export default ProductCard;

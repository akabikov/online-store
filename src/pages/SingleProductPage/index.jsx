import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../../redux/selectors";
import { add } from "../../redux/actions";
import Button from "../../components/Button";
import "./style.scss";

export default function SingleProductPage() {
  const { id } = useParams();
  const { title, price, company, description, imageUrl } =
    useSelector((state) => getProductById(state, id)) || {};
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(add(id));

  return (
    <section className='SingleProductPage'>
      <div className='product-img'>
        <img src={`/${imageUrl}`} alt={title} />
      </div>
      <div className='product-info'>
        <div className='product-info__main'>
          <h2 className='product-info__title'>{title}</h2>
          <div className='product-info__company'>
            <h3>Company:</h3>
            <span> {company}</span>
          </div>
          <div className='product-info__price'>
            <h3>Price:</h3>
            <span> ${price}</span>
          </div>
          <div className='product-info__description'>
            <h3>About product: </h3>
            <p>{description}</p>
          </div>
        </div>
        <div className='product-info__footer'>
          <Button text='Add to cart' onClick={handleAdd} />
          <Button text='Back to products' link='/products' />
        </div>
      </div>
    </section>
  );
}

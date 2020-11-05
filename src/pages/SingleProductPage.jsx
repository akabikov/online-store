import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../redux/selectors";
import { add } from "../redux/actions";

export default function SingleProductPage({ src: id }) {
  const { title, price, company, description, imageUrl } =
    useSelector((state) => getProductById(state, id)) || {};
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(add(id));
  const history = useHistory();
  const handleBack = () => history.push("/products");

  return (
    <section>
      <div>
        <img src={`/${imageUrl}`} alt={title} />
      </div>
      <div>
        <p>{title}</p>
        <p>{company}</p>
        <p>{price}</p>
        <p>{description}</p>
        <button onClick={handleAdd}>Add to cart</button>
        <button onClick={handleBack}>Back to products</button>
      </div>
    </section>
  );
}

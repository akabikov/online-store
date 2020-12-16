import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartItem } from "../../../../redux/selectors/cart";
import { edit, remove } from "../../../../redux/actions";
import Button from "../../../Button";
import "./style.scss";

function CartItem({ id }) {
  const { num, title, price, imageUrl } = useSelector((state) =>
    getCartItem(state, id)
  );
  const dispatch = useDispatch();

  function handler({ currentTarget: { value, name } }) {
    const newNum = Number(value);

    return dispatch(
      {
        increment: () => edit(id, num + 1),
        decrement: () => (num - 1 ? edit(id, num - 1) : remove(id)),
        edit: () => newNum > 0 && edit(id, newNum),
        remove: () => remove(id),
      }[name]?.()
    );
  }

  return (
    <li className='CartItem'>
      <div className='cart-item__img'>
        <img src={`./${imageUrl}`} alt={title} />
      </div>
      <div className='cart-item__title-amount-wrapper'>
        <div className='cart-item__title'>
          <Link to={`/products/${id}`}>{title}</Link>
        </div>

        <form className='cart-item__amount'>
          <Button
            icon='zmdi zmdi-minus-circle'
            name='decrement'
            onClick={handler}
          />
          <input
            type='number'
            inputMode='numeric'
            name='edit'
            value={num}
            min='1'
            onChange={handler}
          />
          <Button
            icon='zmdi zmdi-plus-circle'
            name='increment'
            onClick={handler}
          />
        </form>
      </div>
      <div className='cart-item__price-remove-wrapper'>
        <div className='cart-item__price'>
          <div>${num * price}</div>
          <div className={`cart-item__price-apiece${num > 1 ? "" : " hidden"}`}>
            ${price} apiece
          </div>
        </div>
        <div className='cart-item__remove'>
          <Button icon='zmdi zmdi-delete' name='remove' onClick={handler} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;

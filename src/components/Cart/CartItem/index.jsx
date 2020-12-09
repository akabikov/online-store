import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function CartItem({ id, num, title, price, imageUrl, edit, remove }) {
  function handler({ currentTarget: { value, name } }) {
    const newNum = Number(value);

    return {
      increment: () => edit(id, num + 1),
      decrement: () => (num - 1 ? edit(id, num - 1) : remove(id)),
      edit: () => newNum > 0 && edit(id, newNum),
      remove: () => remove(id),
    }[name]?.();
  }

  return (
    <li className='CartItem'>
      <div className='cart-item__img'>
        <img src={`/${imageUrl}`} alt={title} />
      </div>
      <div className='cart-item__title-amount-wrapper'>
        <div className='cart-item__title'>
          <Link to={`/products/${id}`}>{title}</Link>
        </div>

        <form className='cart-item__amount'>
          <button type='button' name='decrement' onClick={handler}>
            <i className='zmdi zmdi-minus-circle zmdi-hc-2x'></i>
          </button>
          <input
            type='number'
            inputMode='numeric'
            name='edit'
            value={num}
            min='1'
            onChange={handler}
          />
          <button type='button' name='increment' onClick={handler}>
            <i className='zmdi zmdi-plus-circle zmdi-hc-2x'></i>
          </button>
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
          <button type='button' name='remove' onClick={handler}>
            <i className='zmdi zmdi-delete zmdi-hc-2x'></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

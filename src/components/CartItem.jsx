import React from "react";
import "./CartItem.scss";

function CartItem({ id, num, title, price, imageUrl, edit, remove }) {
  function handler(event) {
    event.preventDefault();
    const newNum = Number(event.target.value);

    return {
      increment: () => edit(id, num + 1),
      decrement: () => edit(id, num - 1 || num),
      edit: () => newNum > 0 && edit(id, newNum),
      remove: () => remove(id),
    }[event.target.name]?.();
  }

  return (
    <li>
      <img src={`/${imageUrl}`} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <form>
        <button name='decrement' onClick={handler}>
          -
        </button>
        <input
          type='number'
          name='edit'
          value={num}
          min='1'
          onChange={handler}
        />
        <button name='increment' onClick={handler}>
          +
        </button>
        <button name='remove' onClick={handler}>
          Remove Item
        </button>
      </form>
    </li>
  );
}

export default CartItem;

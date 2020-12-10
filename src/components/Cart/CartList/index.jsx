import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart, getCartSum } from "../../../redux/selectors";
import { clear } from "../../../redux/actions";
import CartItem from "./CartItem";
import "./style.scss";

function CartList() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const handleClear = () => dispatch(clear());

  const cartItems = cart.keys.map((id) => <CartItem key={id} id={id} />);

  const cartSum = useSelector(getCartSum);

  return (
    cartItems.length && (
      <div className='CartList'>
        <ul>{cartItems}</ul>
        <div className='cart__total'>
          <span> {"Cart total: "}</span>
          <span className='cart__total-sum'>{cartSum}</span>
        </div>
        <button className='cart__button' onClick={handleClear}>
          Clear cart
        </button>
      </div>
    )
  );
}

export default CartList;

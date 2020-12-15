import React from "react";
import { useSelector } from "react-redux";
import { getCart, getCartSum } from "../../../redux/selectors/cart";
import CartItem from "./CartItem";
import "./style.scss";

function CartList() {
  const { keys: cartIds } = useSelector(getCart);

  const cartItems = cartIds.map((id) => <CartItem key={id} id={id} />);

  const cartSum = useSelector(getCartSum);

  return (
    <div className='CartList'>
      <ul>{cartItems}</ul>
      <div className='cart__total'>
        <span> {"Cart total: "}</span>
        <span className='cart__total-sum'>{cartSum}</span>
      </div>
    </div>
  );
}

export default CartList;

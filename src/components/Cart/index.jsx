import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import "./style.scss";

function Cart({ isOpen, closeMe }) {
  const isListEmpty = useSelector(({ cart }) => !cart?.keys?.length);
  return (
    <div className={"Cart" + (isOpen ? "" : " hidden")}>
      {isListEmpty ? (
        <>
          <div>Cart is empty</div>
          <Link
            to='/products'
            className='cart__button'
            onClick={() => {
              closeMe();
            }}
          >
            View products
          </Link>
        </>
      ) : (
        <CartList />
      )}
    </div>
  );
}

export default Cart;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartList from "../../components/Cart/CartList";
import "./style.scss";

export default function CartPage() {
  const isListEmpty = useSelector(({ cart }) => !cart?.keys?.length);
  return (
    <div className='CartPage'>
      {isListEmpty ? (
        <>
          <div>Cart is empty</div>
          <Link to='/products' className='cart__button'>
            View products
          </Link>
        </>
      ) : (
        <CartList />
      )}
    </div>
  );
}

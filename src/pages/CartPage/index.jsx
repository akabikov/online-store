import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isCartEmpty } from "../../redux/selectors";
import CartList from "../../components/Cart/CartList";
import "./style.scss";

export default function CartPage() {
  const isListEmpty = useSelector(isCartEmpty);
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

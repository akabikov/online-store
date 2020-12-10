import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clear } from "../../redux/actions";
import { isCartEmpty } from "../../redux/selectors";
import CartList from "./CartList";
import "./style.scss";

function Cart({ isOpen, closeMe }) {
  const isListEmpty = useSelector(isCartEmpty);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clear());
    closeMe();
  };

  return (
    <div className={"Cart" + (isOpen ? "" : " hidden")}>
      {isListEmpty ? (
        <>
          <div>Cart is empty</div>
          <Link to='/products' className='cart__button' onClick={closeMe}>
            View products
          </Link>
        </>
      ) : (
        <>
          <CartList />
          <div className='cart__footer'>
            <Link to='/cart' className='cart__button' onClick={closeMe}>
              Cart page
            </Link>
            <button className='cart__button' onClick={handleClear}>
              Clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

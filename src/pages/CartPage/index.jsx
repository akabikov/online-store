import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clear } from "../../redux/actions";
import { isCartEmpty } from "../../redux/selectors";
import CartList from "../../components/Cart/CartList";
import "./style.scss";

export default function CartPage() {
  const isListEmpty = useSelector(isCartEmpty);
  const dispatch = useDispatch();
  const handleClear = () => dispatch(clear());

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
        <>
          <CartList />
          <div className='cart__footer'>
            <Link to='/checkout' className='cart__button'>
              Checkout
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

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "../../redux/actions";
import { isCartEmpty } from "../../redux/selectors/cart";
import CartList from "../../components/Cart/CartList";
import Button from "../../components/Button";
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
          <Button text='View products' link='/products' />
        </>
      ) : (
        <>
          <CartList />
          <div className='cart__footer'>
            <Button text='Checkout' link='/checkout' />
            <Button text='Clear cart' inverted onClick={handleClear} />
          </div>
        </>
      )}
    </div>
  );
}

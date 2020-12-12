import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "../../redux/actions";
import { isCartEmpty } from "../../redux/selectors";
import CartList from "./CartList";
import Button from "../Button";
import { CartContext } from "./context";
import "./style.scss";

function Cart() {
  const { isOpen, closeMe } = useContext(CartContext);

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
          <Button text='View products' link='/products' onClick={closeMe} />
        </>
      ) : (
        <>
          <CartList />
          <div className='cart__footer'>
            <Button text='Cart page' link='/cart' onClick={closeMe} />
            <Button text='Clear cart' inverted onClick={handleClear} />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

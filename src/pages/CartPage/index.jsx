import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { edit, remove, clear } from "../../redux/actions";
import CartItem from "../../components/Cart/CartItem";
import "./style.scss";

export default function CartPage() {
  const { cart, products } = useSelector(({ cart, products }) => ({
    cart,
    products,
  }));
  const dispatch = useDispatch();

  const cartItems = cart.keys.map((id) => (
    <CartItem
      key={id}
      id={id}
      {...cart.products[id]}
      {...products[id]}
      edit={() => dispatch(edit)}
      remove={() => dispatch(remove)}
    />
  ));

  const cartSum = cart.keys.reduce(
    (sum, id) => sum + products[id].price * cart.products[id].num,
    0
  );

  return (
    <div>
      {cartItems.length ? (
        <>
          <ul>{cartItems}</ul>
          <div className='cart__total'>
            <span> {"Cart total: "}</span>
            <span className='cart__total-sum'>{cartSum}</span>
          </div>
          <button className='cart__button' onClick={() => dispatch(clear)}>
            Clear cart
          </button>
        </>
      ) : (
        <>
          <div>Cart is empty</div>
          <Link to='/products' className='cart__button'>
            View products
          </Link>
        </>
      )}
    </div>
  );
}

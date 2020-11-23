import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { edit, remove, clear } from "../redux/actions";
import CartItem from "./CartItem";
import "./Cart.scss";

function Cart({ isOpen, closeMe, cart, products, edit, remove, clear }) {
  const cartItems = cart.keys.map((id) => (
    <CartItem
      key={id}
      id={id}
      {...cart.products[id]}
      {...products[id]}
      edit={edit}
      remove={remove}
    />
  ));

  const cartSum = cart.keys.reduce(
    (sum, id) => sum + products[id].price * cart.products[id].num,
    0
  );

  return (
    <div className={"Cart" + (isOpen ? "" : " hidden")}>
      {cartItems.length ? (
        <>
          <ul>{cartItems}</ul>
          <div className='cart__total'>
            <span> {"Cart total: "}</span>
            <span className='cart__total-sum'>{cartSum}</span>
          </div>
          <button
            className='cart__button'
            onClick={() => {
              clear();
              closeMe();
            }}
          >
            Clear cart
          </button>
        </>
      ) : (
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
      )}
    </div>
  );
}

const mapStateToProps = ({ cart, products }) => ({ cart, products });

export default connect(mapStateToProps, { edit, remove, clear })(Cart);

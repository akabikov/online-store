import React from "react";
import { connect } from "react-redux";
import { edit, remove, clear } from "../redux/actions";
import CartItem from "./CartItem";
import "./Cart.scss";

function Cart({ isOpen, cart, products, edit, remove, clear }) {
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
      <p>Cart</p>
      <ul>{cartItems}</ul>
      <p>{`Cart total: ${cartSum}`}</p>
      <p>
        <button onClick={clear}>Clear cart</button>
      </p>
    </div>
  );
}

const mapStateToProps = ({ cart, products }) => ({ cart, products });

export default connect(mapStateToProps, { edit, remove, clear })(Cart);

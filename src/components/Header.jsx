import React from "react";
import "./Header.scss";

export default function Header({ openCloseMenu, openCloseCart }) {
  return (
    <header className='Header'>
      <p>Header</p>
      <p>
        <button onClick={openCloseMenu}>Menu</button>
        <button onClick={openCloseCart}>Cart</button>
      </p>
    </header>
  );
}

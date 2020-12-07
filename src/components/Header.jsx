import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header({ openCloseMenu, openCloseCart }) {
  return (
    <header className='Header'>
      <button
        aria-label='Menu'
        aria-controls='navigation'
        onClick={openCloseMenu}
      >
        <i class='zmdi zmdi-menu zmdi-hc-2x'></i>
      </button>
      <Link to='/'>
        <img src='/media/static/logo.svg' alt='store logo' />
      </Link>
      <button onClick={openCloseCart}>
        <i class='zmdi zmdi-shopping-cart zmdi-hc-2x'></i>
      </button>
    </header>
  );
}

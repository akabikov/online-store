import React from "react";
import { Link } from "react-router-dom";
import useToggleState from "../../hooks/useToggleState";
import { MenuContext } from "../Menu/context";
import { CartContext } from "../Cart/context";
import "./style.scss";

function Header({ menu, cart }) {
  const [isMenuOpen, openCloseMenu] = useToggleState();
  const [isCartOpen, openCloseCart] = useToggleState();

  return (
    <>
      <header className='Header'>
        <button
          aria-label='Menu'
          aria-controls='navigation'
          onClick={openCloseMenu}
        >
          <i className='zmdi zmdi-menu zmdi-hc-2x'></i>
        </button>
        <Link to='/'>
          <img src='/media/static/logo.svg' alt='store logo' />
        </Link>
        <button onClick={openCloseCart}>
          <i className='zmdi zmdi-shopping-cart zmdi-hc-2x'></i>
        </button>
      </header>
      <MenuContext.Provider
        value={{ isOpen: isMenuOpen, closeMe: openCloseMenu }}
      >
        {menu}
      </MenuContext.Provider>
      <CartContext.Provider
        value={{ isOpen: isCartOpen, closeMe: openCloseCart }}
      >
        {cart}
      </CartContext.Provider>
    </>
  );
}

export default Header;

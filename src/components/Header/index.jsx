import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartQuantity } from "../../redux/selectors/cart";
import useToggleState from "../../hooks/useToggleState";
import Button from "../Button";
import { MenuContext } from "../Menu/context";
import { CartContext } from "../Cart/context";
import "./style.scss";

function Header({ menu, cart }) {
  const [isMenuOpen, openCloseMenu] = useToggleState();
  const [isCartOpen, openCloseCart] = useToggleState();
  const cartQuantity = useSelector(getCartQuantity);

  return (
    <>
      <header className='Header'>
        <Button
          icon='zmdi zmdi-menu'
          aria-label='Menu'
          style={{ color: "inherit" }}
          onClick={openCloseMenu}
        />
        <Link to='/' className='logo'>
          <span>Classic</span>
          <span>Devices</span>
        </Link>
        <div className='cart-button'>
          <Button
            icon='zmdi zmdi-shopping-cart'
            aria-label='Cart'
            style={{ color: "inherit" }}
            onClick={openCloseCart}
          />
          <div className='cart-counter'>{cartQuantity}</div>
        </div>
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

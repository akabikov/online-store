import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import useToggleState from "./hooks/useToggleState";
import { loadProducts } from "./redux/actions";
import "./App.scss";

function App({ loadProducts }) {
  const [isMenuOpen, openCloseMenu] = useToggleState();
  const [isCartOpen, openCloseCart] = useToggleState();

  useEffect(() => {
    const fetchProducts = async () => await loadProducts();
    fetchProducts();
  }, [loadProducts]);

  return (
    <>
      <Header openCloseMenu={openCloseMenu} openCloseCart={openCloseCart} />
      <Content />
      <Menu isOpen={isMenuOpen} />
      <Cart isOpen={isCartOpen} />
      <Footer />
    </>
  );
}

export default connect(null, { loadProducts })(App);

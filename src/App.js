import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import useToggleState from "./hooks/useToggleState";
import "./App.scss";

function App() {
  const [isMenuOpen, openCloseMenu] = useToggleState();
  const [isCartOpen, openCloseCart] = useToggleState();

  return (
    <>
      <Header openCloseMenu={openCloseMenu} openCloseCart={openCloseCart} />
      <div className='container'>
        <Content />
        <Menu isOpen={isMenuOpen} />
        <Cart isOpen={isCartOpen} />
        <Footer />
      </div>
    </>
  );
}

export default App;

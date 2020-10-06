import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Content />
        <Menu />
        <Cart />
        <Footer />
      </div>
    </>
  );
}

export default App;

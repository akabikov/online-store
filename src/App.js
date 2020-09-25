import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Routes from "./components/Routes";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Menu />
      <Routes />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;

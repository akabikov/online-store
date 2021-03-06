import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { loadProducts } from "./redux/actions";
import { getPublicUrl } from "./helpers/getPublicUrl";
import "./App.scss";

function App({ loadProducts }) {
  useEffect(() => {
    const fetchProducts = async () =>
      await loadProducts(getPublicUrl("productData.json"));
    fetchProducts();
  }, [loadProducts]);

  return (
    <>
      <Header menu={<Menu />} cart={<Cart />} />
      <Content />
      <Footer />
    </>
  );
}

export default connect(null, { loadProducts })(App);

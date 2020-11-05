import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import NotFound from "../pages/NotFound";

export default function Routes(props) {
  return (
    <Switch>
      <Route
        exact
        path={"/products/:id"}
        render={() => <SingleProductPage />}
      />
      <Route exact path={"/products"} render={() => <ProductsPage />} />
      <Route exact path={"/cart"} render={() => <CartPage />} />
      <Route exact path={"/contact"} render={() => <ContactPage />} />
      <Route exact path={"/about"} render={() => <AboutPage />} />
      <Route exact path={"/"} render={() => <HomePage />} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
}

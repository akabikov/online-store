import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", title: "Home" },
  { path: "/products", title: "Products" },
  { path: "/cart", title: "Cart" },
  { path: "/contact", title: "Contact" },
  { path: "/about", title: "About" },
];

export default function Menu(props) {
  const linkItems = links.map(({ path, title }) => (
    <li key={path}>
      <NavLink exact to={path}>
        {title}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul>{linkItems}</ul>
    </nav>
  );
}
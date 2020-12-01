import React from "react";
import { NavLink } from "react-router-dom";
import pages from "../pages";
import "./Menu.scss";

const links = pages
  .filter(({ title }) => title)
  .sort((a, b) => a.menuIdx - b.menuIdx);

export default function Menu({ isOpen, closeMe }) {
  const linkItems = links.map(({ path, title }) => (
    <li key={path}>
      <NavLink exact to={path} onClick={closeMe}>
        {title}
      </NavLink>
    </li>
  ));

  return (
    <nav className={"Menu" + (isOpen ? "" : " hidden")}>
      <ul>{linkItems}</ul>
    </nav>
  );
}

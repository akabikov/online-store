import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const NativeButton = (props) => <button {...props}>{props.children}</button>;

function Button({ text = "", link, icon, type = "button", ...props }) {
  const isButton = !link;
  const Btn = isButton ? NativeButton : Link;

  return (
    <Btn
      to={link}
      className={"button" + (icon ? " button-icon" : "")}
      type={isButton ? type : undefined}
      {...props}
    >
      {icon ? icon : text}
    </Btn>
  );
}

export default Button;

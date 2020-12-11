import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const NativeButton = (props) => <button {...props}>{props.children}</button>;

function Button({
  text = "",
  link,
  icon,
  type = "button",
  inverted = false,
  ...props
}) {
  const isButton = !link;
  const Btn = isButton ? NativeButton : Link;

  return (
    <Btn
      to={link}
      className={
        "button" + (text ? "" : " button-icon") + (inverted ? " inverted" : "")
      }
      type={isButton ? type : undefined}
      {...props}
    >
      {text}
      {typeof icon === "string" ? <i className={icon}></i> : icon}
    </Btn>
  );
}

export default Button;

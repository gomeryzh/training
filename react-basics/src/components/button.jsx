import React from "react";
import './button.css';

const Button = ({ type = "button", label, onClick = () => null  }) => (
  <button type={type} className="Button" onClick={onClick}>
    {label}
  </button>
);

export default Button;

import React from "react";
import './button.css';

const Button = ({ type = "button", label }) => (
  <button type={type} className="Button">
    {label}
  </button>
);

export default Button;

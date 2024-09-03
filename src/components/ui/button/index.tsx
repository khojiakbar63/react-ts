import React from "react";
import "./style.scss";
import type { ButtonProps } from "../../../types";

export const Button: React.FC<ButtonProps> = ({
  className,
  text,
  children,
  onClick,
  type,
}) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children ? children : text ? text : "Button"}
    </button>
  );
};

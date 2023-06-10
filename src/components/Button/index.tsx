import React, { MouseEventHandler } from "react";
import styles from "./button.module.css";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  children: string;
  link?: string | undefined;
  handleClick?:(() => void) | undefined 
};

const Button = ({ children, link = '', handleClick }: ButtonProps) => {
  
  return <button onClick={handleClick} className={styles.btn}>{children}</button>;
};

export default Button;

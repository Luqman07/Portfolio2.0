import React from "react";
import Button from "../Button";
import styles from "./navbar.module.css"

type NavbarProps = {
  open: boolean;
  setOpen: (para: boolean) => void;
};
const Navbar = ({ open, setOpen }: NavbarProps) => {
  return (
    <nav className={styles.container}>
      <Button
        handleClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "Open" : "Close"}
      </Button>
    </nav>
  );
};

export default Navbar;

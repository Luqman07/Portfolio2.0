import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./mobilesidebar.module.css";
import { NavLink } from "react-router-dom";

type MobileSideBarProps = {
  open: boolean;
  setOpen: (para: boolean) => void;
};
const MobileSidebar = ({ open, setOpen }: MobileSideBarProps) => {
  
  
  const handleClick = () => {};
  return (
    <AnimatePresence>
      <>
        <div className={open ? "" : styles.overlay} onClick={() => setOpen(!open)}>
          {" "}
        </div>
        <div className={open ? styles.container : styles.container_active }>
          <h2 className={styles.logo}>Portfolio</h2>
          <div className="links">
            <ul>
              <li className={styles.link}>
                <NavLink
                  className={({
                    isActive,
                  }: {
                    isActive: boolean;
                  }): string | undefined =>
                    isActive ? styles.active : styles.inactive
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink
                  className={({
                    isActive,
                  }: {
                    isActive: boolean;
                  }): string | undefined =>
                    isActive ? styles.active : styles.inactive
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink
                  className={({
                    isActive,
                  }: {
                    isActive: boolean;
                  }): string | undefined =>
                    isActive ? styles.active : styles.inactive
                  }
                  to={"/projects"}
                >
                  Projects
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink
                  className={({
                    isActive,
                  }: {
                    isActive: boolean;
                  }): string | undefined =>
                    isActive ? styles.active : styles.inactive
                  }
                  to={"/skills"}
                >
                  Skills
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink
                  className={({
                    isActive,
                  }: {
                    isActive: boolean;
                  }): string | undefined =>
                    isActive ? styles.active : styles.inactive
                  }
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.socials}>
            <h3 className={styles.socialHeading}>SOCIAL</h3>
            <ul>
              <li className={styles.link}>
                <NavLink to={"/"}>Twitter</NavLink>
              </li>
              <li className={styles.link}>
                <NavLink to={"/"}>LinkedIn</NavLink>
              </li>
              <li className={styles.link}>
                <NavLink to={"/"}>Instagram</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    </AnimatePresence>
  );
};

export default MobileSidebar;

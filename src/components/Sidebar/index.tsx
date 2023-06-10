import React from "react";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";

type SidebarProps = {
  open: boolean;
  isVisible: boolean;
};

const Sidebar = ({ open, isVisible }: SidebarProps) => {
  const containerVariant = {
    hidden: {
      x: "-100vw",
    },
    show: {
      x: 0,
      transition: { type: "tween", delay: -1, duration: 2 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  console.log(open)

  return (
    <AnimatePresence>
      {(isVisible || open) && 
        <div>
          <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          exit="exit"
          className={styles.container}
        >
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
        </motion.div>
        </div>
      }
    </AnimatePresence>
  );
};

export const Navbar = () => {
  return (
    <nav>
      <h2>Portfolio</h2>
      <div>
        <button></button>
      </div>
    </nav>
  );
};

export default Sidebar;

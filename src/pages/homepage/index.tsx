import React from "react";
import styles from "./home.module.css";
import Button from "../../components/Button";
import { useNavigate, useOutletContext } from "react-router-dom";

type ContextType = {
  open: boolean;
  isVisible: boolean;
  setOpen: (bool: boolean) => void;
  setIsVisible: (bool: boolean) => void;
};
const Homepage = () => {
  const navigate = useNavigate();
  const { open, isVisible, setOpen, setIsVisible } =
    useOutletContext<ContextType>();
  const navigateTo = () => {
    navigate("/contact");
  };
  return (
    <div className={styles.container}>
      <div style={{ width: "70%" }}>
        <h1 className={styles.pageTitle}>
          Hi I'm Luqman,
          <br /> I am a Frontend Developer
        </h1>
        <section>
          <p className={styles.pageText}>
            Frontend engineer who creates solutions by using the latest
            technologies to develop easy-to-use, visually appealing and engaging
            websites. I love working at the intersection of design and
            technology, where I get to take a designer's vision and turn it into
            a dynamic and interactive website or app. As a frontend engineer, I
            get to flex my creative muscles while also problem-solving to create
            engaging user experiences.
          </p>
          <div>
            <Button handleClick={navigateTo}>Contact Me</Button>
            <span className={styles.d_none}>
              <Button
                handleClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? "Close" : "Open"}
              </Button>
            </span>
            <Button>Email</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;

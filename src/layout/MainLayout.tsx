import React, {useEffect, useRef, useState} from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./mainlayout.module.css";
import { motion } from "framer-motion";
import MobileSidebar from "../components/MobileSidebar";
import { useDimensions } from "../hooks/useDimension";

const MainLayout = () => {
  const width = useDimensions()
  const [open, setOpen] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(width)
  
  const containerRef = useRef(null) 
  // setIsVisible(width)
  const mainVariant = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: { type: 'tween', delay: 0, duration: 1}}
  }
  

  
  return (
    <div 
      className={styles.container}
    >
      <Sidebar open={open} isVisible={isVisible} />
      <MobileSidebar open={open} setOpen={setOpen}/>
      <motion.main
        variants={mainVariant}
        initial="hidden"
        animate="show"
        className={isVisible ? styles.main : styles.notVisible }
      >
        <Outlet context={{open, isVisible, setOpen, setIsVisible}}/>
      </motion.main>
    </div>
  );
};

export default MainLayout;

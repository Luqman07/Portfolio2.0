import React, {useEffect, useRef, useState} from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./mainlayout.module.css";
import { motion } from "framer-motion";
import MobileSidebar from "../components/MobileSidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  // const width = useDimensions()
  const [open, setOpen] = useState<boolean>(true)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  
  const containerRef = useRef(null) 
  // setIsVisible(width)
  const mainVariant = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: { type: 'tween', delay: 0, duration: 1}}
  }
  
  const {pathname} = useLocation()
  useEffect(() => {
    setOpen(!open)
  }, [pathname])
  
  return (
    <div 
      className={styles.container}
    >
      {/* <Sidebar open={open} isVisible={isVisible} /> */}
      <MobileSidebar open={open} setOpen={setOpen}/>
      <motion.main
        variants={mainVariant}
        initial="hidden"
        animate="show"
        className={open ? styles.main : styles.notVisible }
      >
        <Navbar open={open} setOpen={setOpen}/>
        <Outlet context={{open, isVisible, setOpen, setIsVisible}}/>
      </motion.main>
    </div>
  );
};

export default MainLayout;

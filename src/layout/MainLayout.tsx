import React from "react"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"
import styles from "./mainlayout.module.css"

const MainLayout = () => {
  return (
    <div className={styles.container}>
        <Sidebar/>
        <main className={styles.main}>
          <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout
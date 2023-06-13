import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

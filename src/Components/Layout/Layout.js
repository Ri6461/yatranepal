import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ children, isLoggedIn }) => {
  return (
    <div className="app-layout">
      <Navbar isLoggedIn={isLoggedIn} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

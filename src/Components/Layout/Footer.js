import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" style={{textAlign: 'center', padding: '1rem'}}>
        <p>&copy; {new Date().getFullYear()} Yatra Nepal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

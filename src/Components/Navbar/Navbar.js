import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import NotificationDropdown from "../Notifications/NotificationDropdown";
import "./Navbar.css"; // Import the glowing glassy styles

const Navbar = ({ isLoggedIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '' || location.pathname.includes('index.html');
  const isTransparent = isHome && !scrolled;
  
  console.log('NAVBAR_DEBUG:', { pathname: location.pathname, isHome, scrolled, isTransparent });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleLogout = () => {
    // ✅ Remove the token cookie
    Cookies.remove("token");

    // Redirect to login page
    window.location.href = "/login";
  };
  console.log(isLoggedIn)
  return (
    <>
      <nav 
        className={`navbar navbar-expand-lg glass-navbar ${isTransparent ? 'transparent-state navbar-dark' : 'solid-state navbar-light'}`} 
      >
        <div className="container-fluid">
          <Link className={`navbar-brand fw-bold ${isTransparent ? 'text-white' : 'text-primary'}`} to={"/"} style={{ fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
            Yatra Nepal
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className={`nav-link fw-semibold ${isTransparent ? 'text-white' : 'text-dark'}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link fw-semibold ${isTransparent ? 'text-white' : 'text-dark'}`} to="/packages">Packages</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link fw-semibold ${isTransparent ? 'text-white' : 'text-dark'}`} to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link fw-semibold ${isTransparent ? 'text-white' : 'text-dark'}`} to="/about">About Us</Link>
              </li>
            </ul>

            {isLoggedIn ?
              <div className="d-flex align-items-center">
                <NotificationDropdown />
                <button className="btn btn-danger ms-3" onClick={() => handleLogout()} style={{ borderRadius: '20px', padding: '0.4rem 1.5rem' }}>
                  Logout
                </button>
              </div>
              :
              <div className="d-flex gap-2">
                <Link to="/login" className={`btn ${isTransparent ? 'btn-outline-light' : 'btn-outline-primary'}`} style={{ borderRadius: '20px', padding: '0.4rem 1.5rem' }}>
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary" style={{ borderRadius: '20px', padding: '0.4rem 1.5rem' }}>
                  Sign Up
                </Link>
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
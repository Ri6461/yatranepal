import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import NotificationDropdown from "../Components/Notifications/NotificationDropdown";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        Cookies.set("token", token, { expires: 1 });
        setError("");
        setSuccess("Login successful! Redirecting...");

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (err) {
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Server error. Please try again later.");
      }
      setSuccess("");
    }
  };

  return (
    <div className="auth-container" style={{ paddingTop: '110px' }}>
      <div className="auth-card">
        <h2 className="auth-title">Login to Yatra Nepal</h2>

        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3 shadow-sm" style={{ padding: '12px', borderRadius: '8px', fontSize: '1.1rem' }}>
            Login
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? 
          <Link to="/register" className="auth-link">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

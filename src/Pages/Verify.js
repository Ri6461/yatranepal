import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Auth.css";

const Verify = () => {
  const { id } = useParams();
  let email = id;
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  console.log(email)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: must be 6 digits only
    if (!/^\d{6}$/.test(code)) {
      setError("Please enter a valid 6-digit code.");
      setSuccess("");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Verification failed.");
        setSuccess("");
      } else {
        setSuccess(data.message || "Verification successful! Try Login");
        setError("");
      }
    } catch (err) {
      setError("Server error: " + err.message);
      setSuccess("");
    }
  };

  return (
    <div className="auth-container" style={{ paddingTop: '110px' }}>
      <div className="auth-card">
        <h2 className="auth-title">Verify Your Email</h2>
        <p className="auth-subtitle">
          A 6-digit code has been sent to <strong>{email}</strong>.  
          Please enter it below to verify your account.
        </p>

        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label" htmlFor="code">Verification Code</label>
            <input
              id="code"
              type="text"
              className="form-input"
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={6}
            />
          </div>

          <button type="submit" className="btn auth-btn">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;

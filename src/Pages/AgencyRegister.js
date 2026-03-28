import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AgencyRegister.css";

const AgencyRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    agencyName: "",
    regNumber: "",
    businessLicense: null,
    agencyEmail: "",
    agencyPhone: "",
    agencyAddress: "",
    website: "",
    contactName: "",
    contactPosition: "",
    contactEmail: "",
    contactPhone: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic Validation
    if (!formData.agreeTerms) {
      setError("You must agree to the Terms and Conditions.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      // Create FormData object for file upload
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });

      // Mock API call - in real scenario, this would be your backend endpoint
      console.log("Submitting Agency Registration:", formData);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSuccess("Agency registration submitted successfully! We will review your application.");
      
      // Reset form or navigate
      // navigate("/login");
    } catch (err) {
      setError("Error submitting registration. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="agency-reg-container">
      <div className="agency-reg-card">
        <div className="agency-reg-header">
          <h1 className="agency-reg-title">Register Your Agency</h1>
          <p className="agency-reg-subtitle">Join Yatra Nepal as a travel agency partner</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          {/* Section 1: Agency Information */}
          <div className="form-section">
            <h3 className="section-title">Agency Information</h3>
            <div className="grid-fields">
              <div className="form-group full-width">
                <label className="form-label">Agency Name</label>
                <input
                  type="text"
                  name="agencyName"
                  className="form-input"
                  placeholder="Enter Agency Name"
                  value={formData.agencyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Registration Number</label>
                <input
                  type="text"
                  name="regNumber"
                  className="form-input"
                  placeholder="Official Reg. No."
                  value={formData.regNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Business License</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    name="businessLicense"
                    id="license-upload"
                    style={{ display: 'none' }}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="license-upload" className="file-input-custom">
                    {formData.businessLicense ? formData.businessLicense.name : "Upload File (PDF/Image)"}
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Agency Email</label>
                <input
                  type="email"
                  name="agencyEmail"
                  className="form-input"
                  placeholder="agency@example.com"
                  value={formData.agencyEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Agency Phone</label>
                <input
                  type="tel"
                  name="agencyPhone"
                  className="form-input"
                  placeholder="+977-XXXXXXXXXX"
                  value={formData.agencyPhone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group full-width">
                <label className="form-label">Agency Address</label>
                <textarea
                  name="agencyAddress"
                  className="form-textarea"
                  placeholder="Full physical address"
                  value={formData.agencyAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group full-width">
                <label className="form-label">Website (Optional)</label>
                <input
                  type="url"
                  name="website"
                  className="form-input"
                  placeholder="https://www.youragency.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Contact Person */}
          <div className="form-section">
            <h3 className="section-title">Contact Person</h3>
            <div className="grid-fields">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="contactName"
                  className="form-input"
                  placeholder="Enter Full Name"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Position/Role</label>
                <input
                  type="text"
                  name="contactPosition"
                  className="form-input"
                  placeholder="Manager / Owner"
                  value={formData.contactPosition}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Contact Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  className="form-input"
                  placeholder="personal@email.com"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Contact Phone</label>
                <input
                  type="tel"
                  name="contactPhone"
                  className="form-input"
                  placeholder="+977-XXXXXXXXXX"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 3: Account Credentials */}
          <div className="form-section">
            <h3 className="section-title">Account Credentials</h3>
            <div className="grid-fields">
              <div className="form-group full-width">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-input"
                  placeholder="Create Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="********"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="terms-wrapper">
            <input
              type="checkbox"
              name="agreeTerms"
              className="terms-checkbox"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label>
              I agree to the Terms and Conditions and Privacy Policy. I confirm that all information provided is accurate and I have the authority to register this agency.
            </label>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary submit-btn shadow-lg"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>

        <div className="agency-reg-footer">
          Already have an agency account? 
          <Link to="/login" className="footer-link">
            Login here
          </Link>
          <Link to="/register" className="switch-reg-link">
            Register as Regular User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgencyRegister;

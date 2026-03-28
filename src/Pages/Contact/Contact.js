import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you! Your request has been sent to the Yatra Nepal team.");
    setFormData({ name: "", email: "", category: "", message: "" });
  };

  return (
    <div className="contact-page" style={{ paddingTop: '110px' }}>
      <div className="container dashboard-container">
        {/* Left Section: Discussion Header & Info */}
        <div className="discussion-section">
          <div className="headline-wrapper">
             <h1 className="main-headline">Discuss Your <br/><span className="text-highlight">Package Needs</span></h1>
             <p className="professional-subtitle">
                Ready for an unforgettable journey? Our experts are here to craft your perfect custom itinerary. Let's design your dream escape together.
             </p>
          </div>
          
          <div className="contact-info-footer">
            <div className="contact-pill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              <span>info@yatranepal.com</span>
            </div>
             <div className="contact-pill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+977 1234567890</span>
            </div>
          </div>
        </div>

        {/* Right Section: Glassmorphism Form card */}
        <div className="form-section">
          <div className="glass-card contact-form-card">
            <h2 className="form-title">Send a Message</h2>
            <form className="dashboard-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className="glass-input" 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className="glass-input" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Package Category</label>
                  <select 
                    name="category"
                    className="glass-input"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="trekking">Trekking</option>
                    <option value="adventure">Adventure</option>
                    <option value="cultural">Cultural</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea 
                    name="message"
                    className="glass-input" 
                    rows="4" 
                    placeholder="How can we help you plan your trip?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <span>Send Request</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



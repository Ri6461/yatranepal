import React, { useState } from 'react';
import { Card } from '../Components/Common/Card';
import "./Profile.css";

const Profile = ({ profile }) => {
  const [activeTab, setActiveTab] = useState('bookings');

  if (!profile) {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <p>Loading profile...</p>
            </div>
        </div>
    );
  }

  return (
    <div className="container py-5 mt-5">
      <div className="row mt-4">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="list-group">
            <button className={`list-group-item list-group-item-action ${activeTab === 'bookings' ? 'active' : ''}`} onClick={() => setActiveTab('bookings')}>My Bookings</button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => setActiveTab('wishlist')}>Wishlist</button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>Profile Settings</button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="col-md-9">
          {activeTab === 'bookings' && (
            <Card>
              <h4>My Bookings</h4>
              <p className="text-muted">You have no upcoming bookings.</p>
              {/* Map dummy bookings here later */}
            </Card>
          )}

          {activeTab === 'wishlist' && (
            <Card>
              <h4>My Wishlist</h4>
              <p className="text-muted">Your wishlist is empty. Explore packages!</p>
              {/* Render PackageCard list here */}
            </Card>
          )}

          {activeTab === 'profile' && (
            <Card>
              <div className="d-flex align-items-center mb-4">
                <div className="profile-avatar me-3" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                  {profile.name ? profile.name.charAt(0).toUpperCase() : "U"}
                </div>
                <h2>Profile Settings</h2>
              </div>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" defaultValue={profile?.name || "John Doe"} readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" defaultValue={profile?.email || "john@example.com"} readOnly />
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

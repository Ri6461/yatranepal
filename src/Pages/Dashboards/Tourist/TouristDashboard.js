import React, { useState } from 'react';
import { Card } from '../../../Components/Common/Card';
import { usePackages } from '../../../data/PackagesMock';
import PackageCard from '../../../Components/PackageCard/PackageCard';

const TouristDashboard = ({ profile }) => {
  const packagesDB = usePackages();
  const [activeTab, setActiveTab] = useState('bookings');

  // Find dummy wishlist items from DB
  const wishlistItems = packagesDB.slice(1, 3);
  
  const dummyMyBookings = [
    { id: "BK-1001", pkgName: "Everest Base Camp Trek", date: "2024-05-12", status: "Pending", travelers: 2, price: "Rs. 30,000" }
  ];

  return (
    <div className="container py-5" style={{ paddingTop: '110px', minHeight: '80vh' }}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="list-group shadow-sm">
            <button className={`list-group-item list-group-item-action ${activeTab === 'bookings' ? 'active' : ''}`} onClick={() => setActiveTab('bookings')}>
              <i className="bi bi-calendar-check me-2"></i> My Bookings
            </button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => setActiveTab('wishlist')}>
               <i className="bi bi-heart me-2"></i> Wishlist
            </button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>
               <i className="bi bi-star me-2"></i> Review History
            </button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
               <i className="bi bi-person me-2"></i> Profile Settings
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="col-md-9">
          {activeTab === 'bookings' && (
            <Card>
              <h4 className="mb-4">My Upcoming Trips</h4>
              {dummyMyBookings.length === 0 ? (
                 <p className="text-muted">You have no upcoming bookings. Start exploring!</p>
              ) : (
                <div className="table-responsive">
                   <table className="table align-middle">
                     <thead className="table-light">
                        <tr><th>Booking Ref</th><th>Package Name</th><th>Travel Date</th><th>Travelers</th><th>Total Price</th><th>Status</th><th>Actions</th></tr>
                     </thead>
                     <tbody>
                        {dummyMyBookings.map(b => (
                          <tr key={b.id}>
                             <td><small className="text-muted">{b.id}</small></td>
                             <td><strong>{b.pkgName}</strong></td>
                             <td>{b.date}</td>
                             <td>{b.travelers}</td>
                             <td>{b.price}</td>
                             <td><span className="badge bg-warning text-dark">{b.status}</span></td>
                             <td><button className="btn btn-sm btn-outline-danger">Cancel</button></td>
                          </tr>
                        ))}
                     </tbody>
                   </table>
                </div>
              )}
            </Card>
          )}

          {activeTab === 'wishlist' && (
            <div>
              <h4 className="mb-4">My Wishlist</h4>
              <div className="row">
                 {wishlistItems.map(pkg => (
                   <div className="col-md-6 mb-4" key={pkg.id}>
                      <PackageCard {...pkg} />
                   </div>
                 ))}
                 {wishlistItems.length === 0 && <p className="text-muted">Your wishlist is empty.</p>}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <Card>
               <h4 className="mb-4">My Review History</h4>
               <p className="text-muted">You haven't reviewed any packages yet.</p>
            </Card>
          )}

          {activeTab === 'profile' && (
            <Card>
              <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
                <div className="me-4" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold' }}>
                  {profile?.name ? profile.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div>
                   <h2 className="mb-1">Profile Details</h2>
                   <p className="text-muted mb-0">Manage your personal information.</p>
                </div>
              </div>

              <div className="row">
                 <div className="col-md-6 mb-3">
                   <label className="form-label text-muted">Full Name</label>
                   <input type="text" className="form-control form-control-lg" defaultValue={profile?.name || "Demo User"} readOnly />
                 </div>
                 <div className="col-md-6 mb-3">
                   <label className="form-label text-muted">Email Address</label>
                   <input type="email" className="form-control form-control-lg" defaultValue={profile?.email || "demo@example.com"} readOnly />
                 </div>
                 <div className="col-md-6 mb-3">
                   <label className="form-label text-muted">Phone Number</label>
                   <input type="text" className="form-control form-control-lg" defaultValue="+977-9840000000" readOnly />
                 </div>
              </div>
              <div className="mt-3">
                 <button className="btn btn-primary">Update Profile</button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TouristDashboard;

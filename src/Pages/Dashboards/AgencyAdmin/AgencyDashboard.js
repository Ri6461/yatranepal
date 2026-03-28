import React, { useState } from 'react';
import { Card } from '../../../Components/Common/Card';
import { usePackages } from '../../../data/PackagesMock';

const AgencyDashboard = () => {
  const packagesDB = usePackages()
  const [activeTab, setActiveTab] = useState('overview');

  const dummyBookings = [
    { id: "BK-1001", customer: "John Doe", pkgName: "Everest Base Camp Trek", date: "2024-05-12", status: "Pending", travelers: 2 },
    { id: "BK-1002", customer: "Jane Smith", pkgName: "Chitwan Jungle Safari", date: "2024-06-01", status: "Confirmed", travelers: 4 },
  ];

  const dummyReviews = [
    { id: 1, pkg: "Everest Base Camp Trek", user: "Alice", rating: 5, comment: "Incredible guide!" },
    { id: 2, pkg: "Annapurna Base Camp", user: "Bob", rating: 4, comment: "Beautiful, but very cold." },
  ];

  return (
    <div className="container-fluid py-4" style={{ paddingTop: '110px', minHeight: '80vh' }}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 mb-4">
          <div className="list-group shadow-sm">
            <h5 className="p-3 mb-0 bg-primary text-white rounded-top">Agency Portal</h5>
            <button className={`list-group-item list-group-item-action ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'packages' ? 'active' : ''}`} onClick={() => setActiveTab('packages')}>My Packages</button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'bookings' ? 'active' : ''}`} onClick={() => setActiveTab('bookings')}>Manage Bookings</button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Customer Reviews</button>
            <button className="list-group-item list-group-item-action text-danger mt-3">Settings</button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="col-md-10">
           <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
            <h2 className="mb-0">Agency Dashboard</h2>
            <div className="text-muted">Logged in as: <strong>Nepal Horizon Treks</strong></div>
          </div>

          {activeTab === 'overview' && (
            <div>
               <div className="row">
                 <div className="col-md-4 mb-3">
                   <Card className="shadow-sm"><h5 className="text-muted">Active Packages</h5><h3 className="text-primary">{packagesDB.length}</h3></Card>
                 </div>
                 <div className="col-md-4 mb-3">
                   <Card className="shadow-sm"><h5 className="text-muted">Total Bookings</h5><h3 className="text-success">256</h3></Card>
                 </div>
                 <div className="col-md-4 mb-3">
                   <Card className="shadow-sm"><h5 className="text-muted">Wishlist Alerts</h5><h3 className="text-warning">45 Users</h3>
                     <small className="text-muted">Saved your packages</small>
                   </Card>
                 </div>
               </div>
            </div>
          )}

          {activeTab === 'packages' && (
             <Card>
               <div className="d-flex justify-content-between align-items-center mb-4">
                 <h4>Manage Packages</h4>
                 <button className="btn btn-success" onClick={() => alert("Open Create Package Modal")}>
                   <i className="bi bi-plus-lg me-1"></i> Add New Package
                 </button>
               </div>
               <div className="table-responsive">
                 <table className="table table-hover align-middle">
                   <thead className="table-light">
                      <tr><th>Package</th><th>Location</th><th>Duration</th><th>Price</th><th>Actions</th></tr>
                   </thead>
                   <tbody>
                      {packagesDB.slice(0, 5).map(pkg => (
                        <tr key={pkg.id}>
                           <td>
                             <div className="d-flex align-items-center">
                               <img src={pkg.image} alt={pkg.title} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', marginRight: '10px' }} />
                               <strong>{pkg.title}</strong>
                             </div>
                           </td>
                           <td>{pkg.location}</td>
                           <td>{pkg.duration}</td>
                           <td>{pkg.price}</td>
                           <td>
                             <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                             <button className="btn btn-sm btn-outline-danger">Delete</button>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                 </table>
               </div>
             </Card>
          )}

          {activeTab === 'bookings' && (
             <Card>
               <h4>Manage Bookings</h4>
               <p className="text-muted">Approve or reject incoming tourist booking requests.</p>
               <div className="table-responsive">
                 <table className="table table-hover mt-3">
                   <thead className="table-light">
                      <tr><th>Ref ID</th><th>Customer</th><th>Package</th><th>Travelers</th><th>Date</th><th>Status</th><th>Actions</th></tr>
                   </thead>
                   <tbody>
                      {dummyBookings.map(b => (
                        <tr key={b.id}>
                           <td><small className="text-muted">{b.id}</small></td>
                           <td>{b.customer}</td>
                           <td>{b.pkgName}</td>
                           <td>{b.travelers} <i className="bi bi-people"></i></td>
                           <td>{b.date}</td>
                           <td>
                              <span className={`badge ${b.status === 'Confirmed' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                {b.status}
                              </span>
                           </td>
                           <td>
                              {b.status === 'Pending' && (
                                <>
                                  <button className="btn btn-sm btn-success me-2">Approve</button>
                                  <button className="btn btn-sm btn-danger">Reject</button>
                                </>
                              )}
                              {b.status === 'Confirmed' && (
                                <button className="btn btn-sm btn-outline-secondary">View Details</button>
                              )}
                           </td>
                        </tr>
                      ))}
                   </tbody>
                 </table>
               </div>
             </Card>
          )}

          {activeTab === 'reviews' && (
            <Card>
               <h4>Customer Reviews</h4>
               <div className="list-group mt-3">
                  {dummyReviews.map(r => (
                    <div className="list-group-item list-group-item-action flex-column align-items-start" key={r.id}>
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">{r.pkg}</h6>
                        <small className="text-warning">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</small>
                      </div>
                      <p className="mb-1 text-muted">"{r.comment}"</p>
                      <small>By: <strong>{r.user}</strong></small>
                    </div>
                  ))}
               </div>
            </Card>
          )}

        </div>
      </div>
    </div>
  );
};
export default AgencyDashboard;

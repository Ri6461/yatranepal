import React, { useState } from 'react';
import { Card } from '../../../Components/Common/Card';

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dummyAgencies = [
    { id: 1, name: "Nepal Horizon Treks", contact: "9841234567", email: "info@horizon.com", status: "Active" },
    { id: 2, name: "Yeti Adventures", contact: "9801122334", email: "contact@yetiadv.com", status: "Pending" },
  ];

  const dummyUsers = [
    { id: 101, name: "Rabin Thapa", email: "rabin@example.com", role: "Tourist", status: "Active" },
    { id: 102, name: "Jane Smith", email: "jane@example.com", role: "Tourist", status: "Active" },
  ];

  return (
    <div className="container-fluid py-4" style={{ paddingTop: '110px', minHeight: '80vh' }}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 mb-4">
          <div className="list-group shadow-sm">
            <h5 className="p-3 mb-0 bg-dark text-white rounded-top">Super Admin</h5>
            <button className={`list-group-item list-group-item-action ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Platform Overview</button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'agencies' ? 'active' : ''}`} onClick={() => setActiveTab('agencies')}>Manage Agencies</button>
            <button className={`list-group-item list-group-item-action ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>Manage Users</button>
            <button className="list-group-item list-group-item-action text-danger mt-3">Log Out Setup</button>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="col-md-10">
          <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
            <h2 className="mb-0">Platform Control Center</h2>
            <div className="text-muted">Logged in as: <strong>Super Admin</strong></div>
          </div>

          {activeTab === 'overview' && (
            <div className="row">
               <div className="col-md-4 mb-4">
                 <Card className="text-center h-100">
                    <h5 className="text-muted">Total Authorized Agencies</h5>
                    <h2 className="display-4 text-primary">24</h2>
                 </Card>
               </div>
               <div className="col-md-4 mb-4">
                 <Card className="text-center h-100">
                    <h5 className="text-muted">Total Registered Users</h5>
                    <h2 className="display-4 text-success">3,104</h2>
                 </Card>
               </div>
               <div className="col-md-4 mb-4">
                 <Card className="text-center h-100">
                    <h5 className="text-muted">Total App Bookings</h5>
                    <h2 className="display-4 text-warning">8,900</h2>
                 </Card>
               </div>
            </div>
          )}

          {activeTab === 'agencies' && (
            <Card>
               <h4>Registered Agencies</h4>
               <p className="text-muted">Approve or suspend tour companies operating on Yatra Nepal.</p>
               <div className="table-responsive">
                 <table className="table table-hover mt-3">
                   <thead className="table-light">
                      <tr><th>Agency Name</th><th>Email</th><th>Contact</th><th>Status</th><th>Actions</th></tr>
                   </thead>
                   <tbody>
                      {dummyAgencies.map(agency => (
                        <tr key={agency.id}>
                           <td><strong>{agency.name}</strong></td>
                           <td>{agency.email}</td>
                           <td>{agency.contact}</td>
                           <td>
                             <span className={`badge ${agency.status === 'Active' ? 'bg-success' : 'bg-warning text-dark'}`}>
                               {agency.status}
                             </span>
                           </td>
                           <td>
                             {agency.status === 'Pending' ? (
                               <button className="btn btn-sm btn-success me-2">Approve</button>
                             ) : (
                               <button className="btn btn-sm btn-danger me-2">Suspend</button>
                             )}
                           </td>
                        </tr>
                      ))}
                   </tbody>
                 </table>
               </div>
            </Card>
          )}

          {activeTab === 'users' && (
            <Card>
               <div className="d-flex justify-content-between align-items-center mb-3">
                 <h4>Platform Users (Tourists)</h4>
                 <input type="text" className="form-control w-25" placeholder="Search users by email..." />
               </div>
               <div className="table-responsive">
                 <table className="table table-hover mt-3">
                   <thead className="table-light">
                      <tr><th>User ID</th><th>Name</th><th>Email</th><th>Status</th><th>Actions</th></tr>
                   </thead>
                   <tbody>
                      {dummyUsers.map(user => (
                        <tr key={user.id}>
                           <td>#{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td><span className="badge bg-success">{user.status}</span></td>
                           <td><button className="btn btn-sm btn-outline-danger">Ban User</button></td>
                        </tr>
                      ))}
                   </tbody>
                 </table>
               </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
export default SuperAdminDashboard;

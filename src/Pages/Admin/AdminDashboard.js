import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import { Card } from "../../Components/Common/Card";

const AdminDashboard = () => {
  const [packages, setPackages] = useState([
    { id: 1, title: "Everest Base Camp Trek", category: "Trekking", duration: "14 Days", price: "145000", status: "Active" },
    { id: 2, title: "Annapurna Circuit", category: "Trekking", duration: "12 Days", price: "110000", status: "Active" },
    { id: 3, title: "Pokhara Paragliding & Rafting", category: "Adventure", duration: "3 Days", price: "28000", status: "Active" }
  ]);

  const [activeMenu, setActiveMenu] = useState("Overview");

  const menuItems = [
    { name: "Overview", icon: "dashboard" },
    { name: "Packages", icon: "package" },
    { name: "Bookings", icon: "bookings" },
    { name: "Inquiries", icon: "inquiries" },
    { name: "Settings", icon: "settings" },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      setPackages(packages.filter((pkg) => pkg.id !== id));
    }
  };

  const handleEdit = (pkg) => {
    alert(`Edit mode: ${pkg.title}`);
  };

  const handleView = (pkg) => {
    alert(`Package Preview:\n\nTitle: ${pkg.title}\nCategory: ${pkg.category}\nStatus: ${pkg.status}`);
  };

  const activePackages = packages.filter((p) => p.status === "Active").length;
  const avgPrice = packages.length
    ? Math.round(packages.reduce((sum, p) => sum + Number(p.price), 0) / packages.length)
    : 0;

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="sidebar-brand">YATRA ADMIN</div>
        <ul className="sidebar-nav">
          {menuItems.map((item) => (
            <li key={item.name} className="nav-item">
              <button
                className={`nav-link ${activeMenu === item.name ? "active" : ""}`}
                onClick={() => setActiveMenu(item.name)}
              >
                <span className="nav-icon-placeholder">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div className="topbar-search">
            <input type="text" placeholder="Search packages, bookings..." />
          </div>
          <div className="topbar-actions">
            <div className="user-profile">
              <div className="avatar">AD</div>
              <span>Admin</span>
            </div>
          </div>
        </header>

        <div className="dashboard-content container-fluid py-4">
          <div className="row">
            <div className="col-md-12">
              {activeMenu === "Overview" && (
                <div>
                  <h4>Agency Overview</h4>
                  <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                      <Card><h5 className="text-muted">Total Bookings</h5><h3>1,204</h3></Card>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Card><h5 className="text-muted">Active Packages</h5><h3>{activePackages}</h3></Card>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Card><h5 className="text-muted">Avg Price</h5><h3 className="text-success">Rs {avgPrice.toLocaleString()}</h3></Card>
                    </div>
                  </div>
                </div>
              )}

              {activeMenu === "Packages" && (
                <Card>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Manage Packages</h4>
                    <button className="btn btn-success">+ Add New Package</button>
                  </div>
                  <div className="table-responsive">
                     <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {packages.map(pkg => (
                            <tr key={pkg.id}>
                               <td>{pkg.title}</td>
                               <td>{pkg.category}</td>
                               <td>{pkg.duration}</td>
                               <td>Rs {Number(pkg.price).toLocaleString()}</td>
                               <td><span className="badge bg-success">{pkg.status}</span></td>
                               <td>
                                 <button className="btn btn-sm btn-outline-info me-2" onClick={() => handleEdit(pkg)}>Edit</button>
                                 <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(pkg.id)}>Delete</button>
                               </td>
                            </tr>
                          ))}
                        </tbody>
                     </table>
                  </div>
                </Card>
              )}

              {activeMenu === "Bookings" && (
                <Card>
                  <h4>Recent Bookings</h4>
                  <div className="table-responsive mt-3">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Customer</th>
                          <th>Package</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#BK102</td>
                          <td>Jane Doe</td>
                          <td>{packages[0]?.title}</td>
                          <td><span className="badge bg-warning text-dark">Pending</span></td>
                          <td><button className="btn btn-sm btn-outline-primary">View / Approve</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              )}

              {["Inquiries", "Settings"].includes(activeMenu) && (
                <div className="coming-soon">
                  <h1>{activeMenu}</h1>
                  <p>This section is under development. Coming soon!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
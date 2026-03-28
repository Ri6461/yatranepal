import React, { useState } from 'react';

const dummyNotifications = [
  { id: 1, message: 'Your booking for Pokhara Tour was confirmed!', read: false },
  { id: 2, message: 'Price drop on Everest Base Camp Trek.', read: true },
];

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState(dummyNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="dropdown position-relative me-3">
      <button 
        className="btn btn-light position-relative" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <i className="bi bi-bell"></i>
        {unreadCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.65em' }}>
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="dropdown-menu dropdown-menu-end show shadow" style={{ width: '300px', right: 0, left: 'auto', position: 'absolute', top: '100%', marginTop: '0.5rem' }}>
          <h6 className="dropdown-header">Notifications</h6>
          {notifications.map(n => (
            <button key={n.id} className={`dropdown-item text-wrap ${n.read ? 'text-muted' : 'fw-bold'}`}>
              <small>{n.message}</small>
            </button>
          ))}
          {notifications.length === 0 && <span className="dropdown-item text-muted">No new notifications</span>}
          <div className="dropdown-divider"></div>
          <button className="dropdown-item text-center text-primary">View All</button>
        </div>
      )}
    </div>
  );
};
export default NotificationDropdown;

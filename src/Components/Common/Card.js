import React from 'react';

export const Card = ({ children, className = "" }) => (
  <div className={`card shadow-sm border-0 ${className}`}>
    <div className="card-body">{children}</div>
  </div>
);

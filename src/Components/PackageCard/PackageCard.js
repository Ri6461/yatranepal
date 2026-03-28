import React from "react";
import { Link } from "react-router-dom";
import "./PackageCard.css";
import WishlistToggle from "../Wishlist/WishlistToggle";

const PackageCard = ({ package_id, title, image_url, price, duration, location }) => {
  return (
    <div className="package-card glass-panel">
      <div className="package-image-container" style={{ position: 'relative' }}>
         <WishlistToggle packageId={package_id} />
         {image_url ? (
            <img src={image_url} alt={title} className="package-image" />
         ) : (
            <div className="package-image-placeholder"></div>
         )}
         <div className="package-price-float">
            <span>{price}</span>
         </div>
      </div>
      
      <div className="package-content">
        <div className="package-meta">
            <span className="meta-item"><i className="fas fa-clock"></i> {duration}</span>
            <span className="meta-item"><i className="fas fa-map-marker-alt"></i> {location}</span>
        </div>
        
        <h3 className="package-title">{title}</h3>
        
        <Link to={`/packages/${title}`} className="btn btn-primary w-100 mt-3" style={{ borderRadius: '8px' }}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;

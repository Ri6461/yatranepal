import React from 'react';
import PackageCard from '../../Components/PackageCard/PackageCard';
import { packagesDB } from '../../data/packagesMock';

const WishlistPage = () => {
  // Simulating fetched wishlist items using dummy data
  const wishlistItems = packagesDB.slice(1, 4); // Grabbing a few mock packages

  return (
    <div className="container" style={{ paddingTop: '110px', minHeight: '80vh' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary fw-bold">My Saved Packages <i className="bi bi-heart-fill text-danger ms-2"></i></h2>
        <span className="text-muted">{wishlistItems.length} Items Saved</span>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="alert alert-info shadow-sm border-0" style={{ borderRadius: '12px' }}>
          Your wishlist is entirely empty. Head over to the Packages page to start exploring the Himalayas!
        </div>
      ) : (
        <div className="row g-4">
          {wishlistItems.map((pkg) => (
            <div className="col-md-4" key={pkg.id}>
              <div className="position-relative">
                {/* The PackageCard inherently contains the WishlistToggle which allows removing items */}
                <PackageCard {...pkg} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

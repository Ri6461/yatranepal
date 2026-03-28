import React, { useState } from 'react';

const WishlistToggle = ({ packageId, initialStatus = false }) => {
  const [isWishlisted, setIsWishlisted] = useState(initialStatus);

  const toggleWishlist = () => {
    // Simulate API Call: api.post(`/wishlist/toggle/${packageId}`)
    setIsWishlisted(!isWishlisted);
  };

  return (
    <button 
      className="btn rounded-circle shadow-sm"
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(); }}
      title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      style={{ 
        position: 'absolute', 
        top: '12px', 
        right: '12px', 
        zIndex: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: isWishlisted ? '#FF6F61' : '#6c757d',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        transition: 'all 0.2s ease-in-out'
      }}
    >
      <i className={`bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}`} style={{ fontSize: '1.2rem' }}></i>
    </button>
  );
};
export default WishlistToggle;

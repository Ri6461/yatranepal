import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PackageDetails.css";
import BookingForm from "../../Components/Booking/BookingForm";
import ReviewsSection from "../../Components/Reviews/ReviewsSection";
import { usePackages } from "../../data/PackagesMock";

const PackageDetails = () => {
  const { id } = useParams();
  const packagesDB = usePackages();
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
  if (Array.isArray(packagesDB) && id) {
    const found_pkg = packagesDB.find(p => p.title === id);
    console.log(found_pkg)
    console.log(packagesDB)
    console.log(id)
    setPackageData(found_pkg);
  }
}, [id, packagesDB]);


  if (!packageData) {
      return <div className="loading">Loading Package Details...</div>;
  }

  return (
    <div className="details-page" style={{ paddingTop: '110px' }}>
      <div className="details-hero" style={{ backgroundImage: `url(${packageData.image_url})` }}>
         <div className="details-overlay glass-panel" style={{margin: '2rem', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)'}}>
            <h1>{packageData.title}</h1>
            <p className="details-location"><i className="fas fa-map-marker-alt"></i> {packageData.location} | {packageData.duration}</p>
         </div>
      </div>

      <div className="container details-content-wrapper">
         <div className="details-main">
            <div className="details-section glass-panel" style={{padding: '2rem', borderRadius: 'var(--radius-md)'}}>
                <h2>Overview</h2>
                <p>{packageData.description}</p>
            </div>
            
            <div className="details-section glass-panel" style={{padding: '2rem', borderRadius: 'var(--radius-md)'}}>
                <h2>Itinerary Highlights</h2>
                <ul className="itinerary-list">
                    {packageData.itinerary && packageData.itinerary.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
         </div>

         <div className="details-sidebar">
            <div className="sidebar-card glass-panel">
                <div className="sidebar-price">
                    <span>{packageData.price}</span> / person
                </div>
                <div className="sidebar-info">
                    <p><strong>Duration:</strong> {packageData.duration}</p>
                    <p><strong>Category:</strong> Trekking</p>
                    <p><strong>Group Size:</strong> 2-10 People</p>
                </div>
            </div>
            <div className="mt-4">
                <BookingForm packageId={packageData.packageId} packagePrice={packageData.price} />
            </div>
         </div>
      </div>
      <div className="container mt-4 mb-5">
        <ReviewsSection packageId={packageData.packageId} />
      </div>
    </div>
  );
};

export default PackageDetails;

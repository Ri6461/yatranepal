import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import PackageCard from '../../Components/PackageCard/PackageCard';
import { usePackages } from '../../data/PackagesMock';

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const packagesDB = usePackages();
  // Featured packages subset (Top 3)
  const featuredPackages = packagesDB.slice(0, 3);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/packages');
  };

  return (
    <div className="home-page">
      {/* Immersive Hero Section */}
      <section className="hero-fullscreen">
        <div className="hero-overlay"></div>
        <div className="container hero-content-center text-center text-white">
          <h1 className="hero-title-main animate-slide-up">Discover Nepal's <span className="text-highlight">Majestic</span> Beauty</h1>
          <p className="hero-subtitle-main animate-fade-in mt-3 mb-5">
            Embark on unforgettable journeys through the Himalayas. Professionally curated tours for students and bold travelers.
          </p>
          
          {/* Glassmorphic Search Overlay */}
          <div className="hero-search-glass animate-pop-in mx-auto mt-4">
            <form onSubmit={handleSearch} className="row g-2 align-items-center">
                <div className="col-md-4">
                   <div className="input-group">
                     <span className="input-group-text bg-transparent border-0"><i className="bi bi-geo-alt text-primary"></i></span>
                     <input type="text" className="form-control form-control-lg border-0 shadow-none bg-transparent" placeholder="Where to?" />
                   </div>
                </div>
                <div className="col-md-3 border-start">
                   <div className="input-group">
                     <span className="input-group-text bg-transparent border-0"><i className="bi bi-activity text-primary"></i></span>
                     <select className="form-select border-0 shadow-none bg-transparent text-muted">
                        <option>Activity</option>
                        <option>Trekking</option>
                        <option>Safari</option>
                        <option>Culture</option>
                     </select>
                   </div>
                </div>
                <div className="col-md-3 border-start">
                   <div className="input-group">
                     <span className="input-group-text bg-transparent border-0"><i className="bi bi-calendar text-primary"></i></span>
                     <input type="date" className="form-control border-0 shadow-none bg-transparent text-muted" />
                   </div>
                </div>
                <div className="col-md-2 p-1">
                   <button type="submit" className="btn btn-primary btn-lg w-100 py-3" style={{ borderRadius: '12px' }}>Search</button>
                </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section">
        <div className="container">
           <div className="section-header">
              <h2>Top Rated Destinations</h2>
              <p>Explore our most popular and highly verified Himalayan packages this season.</p>
           </div>
           
           <div className="features-grid">
              {featuredPackages.map(pkg => (
                  <div className="animate-fade-in-up" key={pkg.id}>
                    <PackageCard {...pkg} />
                  </div>
              ))}
           </div>
           
           <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link to="/packages" className="btn btn-outline btn-lg px-5">View All Destinations</Link>
           </div>
        </div>
      </section>

       {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
           <div className="section-header">
              <h2>Experience the Difference</h2>
           </div>
           <div className="why-us-grid">
               <div className="why-card glass-panel text-center p-5">
                  <div className="why-icon text-primary mb-3"><i className="bi bi-shield-check" style={{fontSize: '3rem'}}></i></div>
                  <h3>Verified & Safe</h3>
                  <p>All tour operators and guides are fully verified for your safety.</p>
               </div>
               <div className="why-card glass-panel text-center p-5">
                  <div className="why-icon text-primary mb-3"><i className="bi bi-backpack" style={{fontSize: '3rem'}}></i></div>
                  <h3>Student Friendly</h3>
                  <p>Budget-friendly packages designed specifically for college groups.</p>
               </div>
               <div className="why-card glass-panel text-center p-5">
                  <div className="why-icon text-primary mb-3"><i className="bi bi-star" style={{fontSize: '3rem'}}></i></div>
                  <h3>Premium Experience</h3>
                  <p>Quality accommodation and seamless transport included.</p>
               </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

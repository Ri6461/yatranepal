import React, { useState } from "react";
import PackageCard from "../../Components/PackageCard/PackageCard";
import "./Packages.css";
import { usePackages } from "../../data/PackagesMock";

const Packages = () => {
    const packagesDB = usePackages();
    const [searchTerm, setSearchTerm] = useState('');
    const [durationFilter, setDurationFilter] = useState('All Durations');

    // We get all packages from mock data
    const allPackages = packagesDB;

    // Filter Logic
    const filteredPackages = allPackages.filter(pkg => {
  // 1. Text Search Filter
  const matchesSearch =
    pkg.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.location?.toLowerCase().includes(searchTerm.toLowerCase());

  // 2. Duration Filter
  let matchesDuration = true;

  if (pkg.duration) {
  // handle both string ("12 Days") and number (12)
  const days =
    typeof pkg.duration === "string"
      ? parseInt(pkg.duration.split(" ")[0]) || 0
      : Number(pkg.duration) || 0;

  if (durationFilter === "Short (1-3 Days)") {
    matchesDuration = days >= 1 && days <= 3;
  } else if (durationFilter === "Medium (4-7 Days)") {
    matchesDuration = days >= 4 && days <= 7;
  } else if (durationFilter === "Long (8+ Days)") {
    matchesDuration = days >= 8;
  }
}


  return matchesSearch && matchesDuration;
});


  return (
    <div className="packages-page" style={{ paddingTop: '110px' }}>
      <div className="container">
        <div className="page-header">
           <h1>Explore Our Packages</h1>
           <p>Choose from our wide range of curated tour packages.</p>
        </div>

        {/* Glassy Filter Bar */}
        <div className="filter-bar glass-panel d-flex gap-3 mb-5" style={{ padding: '1.5rem', borderRadius: '12px' }}>
           <input 
             type="text" 
             placeholder="Search destinations..." 
             className="form-control" 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
           <select 
             className="form-select" 
             value={durationFilter}
             onChange={(e) => setDurationFilter(e.target.value)}
           >
             <option>All Durations</option>
             <option>Short (1-3 Days)</option>
             <option>Medium (4-7 Days)</option>
             <option>Long (8+ Days)</option>
           </select>
        </div>

        <div className="packages-grid">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))
          ) : (
            <div className="col-12 text-center text-muted w-100 py-5">
               <h4>No packages found matching your criteria.</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Packages;

// PropertyCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css'; // Ensure this path is correct

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} className="property-img" />
      <div className="property-details">
        <h2>{property.name}</h2>
        <p>{property.price}</p>
        <Link to={`/property/${property.id}`} className="view-details-button">View Details</Link>
      </div>
    </div>
  );
}

export default PropertyCard;

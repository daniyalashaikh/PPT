// PropertyDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetails() {
  const { id } = useParams();
  
  // Fetch property details using id or use a static object for now
  const property = {
    // Example data
    id: 1,
    name: 'House A',
    price: '$300,000',
    description: 'A beautiful house in a great location.',
  };

  return (
    <div className="property-details-page">
      <h1>{property.name}</h1>
      <p>{property.price}</p>
      <p>{property.description}</p>
      <button onClick={() => alert('PSP- 4567-345')}>Get Code</button>
    </div>
  );
}

export default PropertyDetails;

import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import './Categories.css';
import houseImg1 from '../images/DHA.jpg';
import houseImg2 from '../images/bhukkari.jpg';
import plotImg from '../images/residential plot.jpg'; // Renamed for consistency
import commercialImg from '../images/commercial plot.jpg'; // Renamed for consistency
import shopImg from '../images/homo.PNG'; // Renamed for consistency

const propertiesData = {
  'Residential House': [
    { id: 1, name: 'House A', price: '$300,000', image: houseImg1 },
    { id: 2, name: 'House B', price: '$350,000', image: houseImg2 }
  ],
  'Residential Plot': [
    { id: 3, name: 'Plot A', price: '$150,000', image: plotImg }
  ],
  'Commercial Plot': [
    { id: 4, name: 'Commercial Plot A', price: '$500,000', image: commercialImg }
  ],
  'Shop': [
    { id: 5, name: 'Shop A', price: '$200,000', image: shopImg }
  ]
};

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [properties, setProperties] = useState([]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setProperties(propertiesData[category] || []);
  };

  return (
    <div className="categories-page">
      <h1>Select a Category</h1>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="Residential House">Residential House</option>
        <option value="Residential Plot">Residential Plot</option>
        <option value="Commercial Plot">Commercial Plot</option>
        <option value="Shop">Shop</option>
      </select>

      <div className="property-list">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Categories;

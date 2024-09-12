import React from 'react';
import './Home.css'; // Ensure this path is correct

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-header">Welcome to Prime Property Tech</h1>
      <p className="home-subheader">You will find the best property here</p>
      <p className="home-message">Please select a category from the navigation bar to explore more.</p>
    </div>
  );
};

export default Home;

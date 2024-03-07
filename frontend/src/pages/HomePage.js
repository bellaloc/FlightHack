// HomePage.js

import React from 'react';
import FlightSearchForm from '../components/FlightSearchForm';

const HomePage = ({ onSearch }) => {
  return (
    <div className="home-page">
      <h1>Welcome to FlightHack</h1>
      <FlightSearchForm onSearch={onSearch} />
    </div>
  );
};

export default HomePage;

// SearchResultsPage.js

import React from 'react';
import FlightResults from '../components/FlightResults';

const SearchResultsPage = ({ flights }) => {
  return (
    <div className="search-results-page">
      <h1>Search Results</h1>
      <FlightResults flights={flights} />
    </div>
  );
};

export default SearchResultsPage;

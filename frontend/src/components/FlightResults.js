// FlightResults.js

import React from 'react';

const FlightResults = ({ flights }) => {
  return (
    <div className="flight-results">
      <h2>Search Results</h2>
      {flights.length > 0 ? (
        <ul>
          {flights.map((flight, index) => (
            <li key={index}>
              <p>Airline: {flight.airline}</p>
              <p>Price: {flight.price}</p>
              <p>Departure Time: {flight.departureTime}</p>
              <p>Arrival Time: {flight.arrivalTime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found.</p>
      )}
    </div>
  );
};

export default FlightResults;

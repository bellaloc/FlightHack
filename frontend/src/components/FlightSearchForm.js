// FlightSearchForm.js

import React, { useState } from 'react';

const FlightSearchForm = ({ onSearch }) => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({
      departureAirport,
      arrivalAirport,
      departureDate,
      returnDate
    });
  };

  return (
    <form className="flight-search-form" onSubmit={handleSearch}>
      <input type="text" placeholder="Departure Airport" value={departureAirport} onChange={(e) => setDepartureAirport(e.target.value)} />
      <input type="text" placeholder="Arrival Airport" value={arrivalAirport} onChange={(e) => setArrivalAirport(e.target.value)} />
      <input type="date" placeholder="Departure Date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
      <input type="date" placeholder="Return Date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
      <button type="submit">Search Flights</button>
    </form>
  );
};

export default FlightSearchForm;

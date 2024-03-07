// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import FlightService from './services/FlightService';

const App = () => {
  const [flights, setFlights] = useState([]);

  const handleSearch = async (searchCriteria) => {
    const data = await FlightService.searchFlights(searchCriteria);
    setFlights(data);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} onSearch={handleSearch} />} />
          <Route path="/search-results" render={(props) => <SearchResultsPage {...props} flights={flights} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

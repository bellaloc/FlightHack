// api.js

// Example API routes

const express = require('express');
const router = express.Router();
const FlightSearchController = require('../controllers/FlightSearchController');

// Flight search endpoint
router.get('/flights', FlightSearchController.searchFlights);

module.exports = router;

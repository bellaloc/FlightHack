# FlightHack API Documentation

## Introduction

This document provides documentation for the FlightHack API.

## Endpoints

### Search Flights

- **URL:** `/api/flights`
- **Method:** GET
- **Description:** Search for flights based on specified criteria.
- **Parameters:**
  - `departureAirport`: Departure airport code (e.g., JFK).
  - `arrivalAirport`: Arrival airport code (e.g., LAX).
  - `departureDate`: Departure date in YYYY-MM-DD format.
  - `returnDate`: Return date in YYYY-MM-DD format (optional).
- **Response:**
  - Success: HTTP 200 OK with an array of flight objects.
  - Error: HTTP 400 Bad Request with error message.

Example request:

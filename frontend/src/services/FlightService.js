// FlightService.js

// Example flight service for fetching flight data from the backend

const FlightService = {
    searchFlights: async (searchCriteria) => {
      try {
        // Make API request to backend to search for flights
        const response = await fetch(`/api/flights?departureAirport=${searchCriteria.departureAirport}&arrivalAirport=${searchCriteria.arrivalAirport}&departureDate=${searchCriteria.departureDate}&returnDate=${searchCriteria.returnDate}`);
        if (!response.ok) {
          throw new Error('Failed to fetch flights');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  };
  
  export default FlightService;
  
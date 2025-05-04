// src/components/MapComponent.js
import React from 'react';

const MapComponent = ({ location }) => {
  // Check if location is defined and has lat and lng properties
  if (!location || !location.lat || !location.lng) {
    return <div>Loading map...</div>; // Show a loading message or placeholder
  }

  return (
    <div>
      {/* Render your map here using location.lat and location.lng */}
      <h2>Map Location</h2>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
      {/* Add your map rendering logic here */}
    </div>
   
    
    
  );
};

export default MapComponent;
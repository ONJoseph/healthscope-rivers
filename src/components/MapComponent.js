import React, { useState, useEffect } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Mapbox access token.
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';

export default function MapComponent() {
  const [viewport, setViewport] = useState({
    latitude: 4.8156,
    longitude: 7.0056,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    width: '800px',
    height: '600px',
  });

  const [healthcareFacilities, setHealthcareFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);

  // Function to fetch healthcare facilities data
  const fetchHealthcareFacilities = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/healthcare-facilities');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHealthcareFacilities(data);
    } catch (error) {
      console.error('Error fetching healthcare facilities:', error);
    }
  };

  useEffect(() => {
    fetchHealthcareFacilities(); // Fetch data on component mount
  }, []);

  return (
    <div className="w-full h-full">
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {healthcareFacilities.map((facility) =>
          facility.latitude != null && facility.longitude != null ? (
            <Marker
              key={facility.id}
              latitude={facility.latitude}
              longitude={facility.longitude}
            >
              <button
                className="bg-green-500 rounded-full w-3 h-3"
                onClick={() => setSelectedFacility(facility)}
              ></button>
            </Marker>
          ) : null
        )}

        {selectedFacility && (
          <Popup
            latitude={selectedFacility.latitude}
            longitude={selectedFacility.longitude}
            onClose={() => setSelectedFacility(null)}
            closeOnClick={true}
            className="bg-white p-2 rounded"
          >
            <div>
              <h3 className="text-green-600 font-bold">{selectedFacility.name}</h3>
              <p>{selectedFacility.description}</p>
            </div>
          </Popup>
        )}
      </MapGL>
    </div>
  );
}

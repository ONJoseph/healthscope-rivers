import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom icon setup
const hospitalIcon = L.icon({
  iconUrl: '/icons/hospital.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

function MapComponent() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    fetchFacilityData();

    if (mapContainerRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([4.81299, 7.00261], 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const fetchFacilityData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/healthcare-facilities');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        addMarkers(data);
      } else {
        const textResponse = await response.text();
        console.error('Received response is not JSON:', textResponse);
        throw new Error('Response is not valid JSON');
      }
    } catch (error) {
      console.error('Error fetching facility data:', error);
    }
  };

  const addMarkers = (facilities) => {
    facilities.forEach(facility => {
      const marker = L.marker([facility.latitude, facility.longitude], { icon: hospitalIcon }).addTo(mapRef.current);
      marker.bindPopup(`<b>${facility.name}</b><br>${facility.description}`).openPopup();
    });
  };

  return (
    <div>
      <div ref={mapContainerRef} style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
}

export default MapComponent;

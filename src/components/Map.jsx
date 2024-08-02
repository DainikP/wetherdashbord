import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Import the CSS file

const MapUpdater = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);

  return null;
};

const Map = ({ setLocationData }) => {
  const [position, setPosition] = useState(null); // Start with null

  useEffect(() => {
    const handleSuccess = async (position) => {
      const { latitude, longitude } = position.coords;
      setPosition([latitude, longitude]);

      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        const locationName = data.display_name;
        setLocationData({ name: locationName, latitude, longitude });
      } catch (error) {
        console.error("Error fetching location name:", error);
      }
    };

    const handleError = (error) => {
      console.error("Error getting location:", error);
    };

    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [setLocationData]);

  return (
    <div className="map-container">
      <MapContainer
        center={position || [51.505, -0.09]} // Default center if position is not available
        zoom={13}
        className="leaflet-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {position && (
          <>
            <Marker position={position}>
              <Popup>Your live location</Popup>
            </Marker>
            <MapUpdater position={position} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;

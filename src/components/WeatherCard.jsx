import React from 'react';
import './WeatherCard.css'; // Import CSS file for styling
import weatherData from '../weatherData.json'; // Import JSON data

const WeatherCard = ({ locationData }) => {
  const { currentWeather } = weatherData;

  console.log("Current Weather:", currentWeather);

  return (
    <div className="weather-card">
      {/* <div className="weather-icon"> */}
        {/* <img src={currentWeather.icon} alt={currentWeather.condition} /> */}
      {/* </div> */}
      <div className="weather-details">
        <h2>{currentWeather.date}</h2>
        <p><strong>Temperature:</strong> {currentWeather.temperature}</p>
        <p><strong>Humidity:</strong> {currentWeather.humidity}</p>
        <p><strong>Wind Speed:</strong> {currentWeather.windSpeed}</p>
        <p><strong>Condition:</strong> {currentWeather.condition}</p>
        {locationData && (
          <div className="location-details">
            <p><strong>Location:</strong> {locationData.name}</p>
            <p><strong>Latitude:</strong> {locationData.latitude}</p>
            <p><strong>Longitude:</strong> {locationData.longitude}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;

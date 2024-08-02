import React, { useState } from 'react';
import Map from './components/Map';
import WeatherCard from './components/WeatherCard';
import WeeklyForecastChart from './components/WeeklyForecastChart';
import EnsembleForecastChart from './components/EnsembleForecastChart';
import FifteenDayForecastChart from './components/FifteenDayForecastChart';
import HistoricalWeatherChart from './components/HistoricalWeatherChart';
import ClimateChangeComponent from './components/ClimateChangeComponent';
import MarineForecastChart from './components/MarineForecastChart';
import AirQualityChart from './components/AirQualityChart';
import './Dashboard.css';

const weeklyForecast = [
  { date: "2024-08-01", temperatureHigh: "27°C", temperatureLow: "20°C", precipitation: "0%", condition: "Sunny" },
  { date: "2024-08-02", temperatureHigh: "28°C", temperatureLow: "21°C", precipitation: "10%", condition: "Partly Cloudy" },
];

const ensembleForecast = [
  { date: "2024-08-01", temperatureMean: "26°C", temperatureRange: "24°C - 28°C", precipitationProbability: "5%" },
  { date: "2024-08-02", temperatureMean: "27°C", temperatureRange: "25°C - 29°C", precipitationProbability: "10%" },
];

const fifteenDayForecast = [
  { date: "2024-08-01", temperatureHigh: "27°C", temperatureLow: "20°C", precipitation: "0%", condition: "Sunny" },
  { date: "2024-08-02", temperatureHigh: "28°C", temperatureLow: "21°C", precipitation: "10%", condition: "Partly Cloudy" },
];

const historicalWeather = [
  { date: "2023-08-01", temperatureHigh: "30°C", temperatureLow: "22°C", precipitation: "5%", condition: "Mostly Sunny" },
  { date: "2023-08-02", temperatureHigh: "31°C", temperatureLow: "23°C", precipitation: "10%", condition: "Cloudy" },
];

const climateChange = {
  averageTemperatureRise: "1.2°C",
  carbonEmissions: "3500 Mt",
  seaLevelRise: "3 cm",
  year: "2024"
};

const marineForecast = [
  { date: "2024-08-01", waveHeight: "1.5 m", seaTemperature: "24°C", windSpeed: "15 km/h", condition: "Calm" },
  { date: "2024-08-02", waveHeight: "2.0 m", seaTemperature: "25°C", windSpeed: "20 km/h", condition: "Mild" },
];

const airQuality = [
  { date: "2024-08-01", pm10: "20 µg/m³", pm2_5: "15 µg/m³", ozone: "30 µg/m³", nitrogenDioxide: "10 µg/m³", carbonMonoxide: "0.5 mg/m³" },
  { date: "2024-08-02", pm10: "22 µg/m³", pm2_5: "17 µg/m³", ozone: "32 µg/m³", nitrogenDioxide: "12 µg/m³", carbonMonoxide: "0.6 mg/m³" },
];

const Dashboard = () => {
  const [locationData, setLocationData] = useState(null);

  return (
    <div className="dashboard">
      <h1>Weather Dashboard</h1>
      <div className="grid-container">
        <div className="grid-item">
          <Map setLocationData={setLocationData} />
        </div>
        <div className="grid-item">
          <WeatherCard locationData={locationData} />
        </div>
        <div className="grid-item"><WeeklyForecastChart weeklyForecast={weeklyForecast} /></div>
        <div className="grid-item"><EnsembleForecastChart ensembleForecast={ensembleForecast} /></div>
        <div className="grid-item"><FifteenDayForecastChart fifteenDayForecast={fifteenDayForecast} /></div>
        <div className="grid-item"><HistoricalWeatherChart historicalWeather={historicalWeather} /></div>
        <div className="grid-item"><ClimateChangeComponent climateChange={climateChange} /></div>
        <div className="grid-item"><MarineForecastChart marineForecast={marineForecast} /></div>
        <div className="grid-item"><AirQualityChart airQuality={airQuality} /></div>
      </div>
    </div>
  );
};

export default Dashboard;

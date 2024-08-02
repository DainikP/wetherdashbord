import React from 'react';
import './ClimateChangeComponent.css'; 
import image from '../assets/climatechange.jpeg';

const ClimateChangeComponent = ({ climateChange }) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={divStyle} className="climate-change">
      <h2>Climate Change Statistics</h2>
      <p><strong>Average Temperature Rise:</strong> {climateChange.averageTemperatureRise}</p>
      <p><strong>Carbon Emissions:</strong> {climateChange.carbonEmissions}</p>
      <p><strong>Sea Level Rise:</strong> {climateChange.seaLevelRise}</p>
      <p><strong>Year:</strong> {climateChange.year}</p>
    </div>
  );
};

export default ClimateChangeComponent;

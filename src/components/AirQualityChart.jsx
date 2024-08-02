import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './AirQualityChart.css'; // Import CSS for styling

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AirQualityChart = ({ airQuality }) => {
  const dates = airQuality.map(day => day.date);
  const pm10 = airQuality.map(day => parseFloat(day.pm10));
  const pm2_5 = airQuality.map(day => parseFloat(day.pm2_5));
  const ozone = airQuality.map(day => parseFloat(day.ozone));
  const nitrogenDioxide = airQuality.map(day => parseFloat(day.nitrogenDioxide));
  const carbonMonoxide = airQuality.map(day => parseFloat(day.carbonMonoxide));

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'PM10 (µg/m³)',
        data: pm10,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'PM2.5 (µg/m³)',
        data: pm2_5,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Ozone (µg/m³)',
        data: ozone,
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
      {
        label: 'Nitrogen Dioxide (µg/m³)',
        data: nitrogenDioxide,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Carbon Monoxide (mg/m³)',
        data: carbonMonoxide,
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="air-quality-chart">
      <h2>Air Quality</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AirQualityChart;

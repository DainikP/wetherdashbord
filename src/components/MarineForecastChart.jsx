import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import './MarineForecastChart.css'; // Import CSS for styling

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const MarineForecastChart = ({ marineForecast }) => {
  const dates = marineForecast.map(day => day.date);
  const waveHeights = marineForecast.map(day => parseFloat(day.waveHeight));
  const seaTemperatures = marineForecast.map(day => parseFloat(day.seaTemperature));
  const windSpeeds = marineForecast.map(day => parseFloat(day.windSpeed));

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Wave Height (m)',
        data: waveHeights,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Sea Temperature (°C)',
        data: seaTemperatures,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: true,
      },
      {
        label: 'Wind Speed (km/h)',
        data: windSpeeds,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
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
    <div className="marine-forecast-chart">
      <h2>Marine Forecast</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default MarineForecastChart;

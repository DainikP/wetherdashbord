import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import './HistoricalWeatherChart.css'; // Import CSS for styling

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const HistoricalWeatherChart = ({ historicalWeather }) => {
  const dates = historicalWeather.map(day => day.date);
  const temperaturesHigh = historicalWeather.map(day => parseFloat(day.temperatureHigh));
  const temperaturesLow = historicalWeather.map(day => parseFloat(day.temperatureLow));

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'High Temperature',
        data: temperaturesHigh,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Low Temperature',
        data: temperaturesLow,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
            return `${label}: ${value}°C`;
          },
        },
      },
    },
  };

  return (
    <div className="historical-weather-chart">
      <h2>Historical Weather</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default HistoricalWeatherChart;

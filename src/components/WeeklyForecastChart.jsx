import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './WeeklyForecastChart.css'; // Import CSS for styling

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyForecastChart = ({ weeklyForecast }) => {
  const dates = weeklyForecast.map((day) => day.date);
  const temperaturesHigh = weeklyForecast.map((day) =>
    parseFloat(day.temperatureHigh)
  );
  const temperaturesLow = weeklyForecast.map((day) =>
    parseFloat(day.temperatureLow)
  );
  const precipitation = weeklyForecast.map((day) =>
    parseFloat(day.precipitation)
  );

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'High Temperature (°C)',
        data: temperaturesHigh,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3, // Smoothing the line
        pointStyle: 'circle',
        pointRadius: 5,
      },
      {
        label: 'Low Temperature (°C)',
        data: temperaturesLow,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: true,
        tension: 0.3, // Smoothing the line
        pointStyle: 'rect',
        pointRadius: 5,
      },
      {
        label: 'Precipitation (%)',
        data: precipitation,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.3, // Smoothing the line
        pointStyle: 'triangle',
        pointRadius: 5,
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
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + '°C';
          },
        },
      },
    },
  };

  return (
    <div className="weekly-forecast-chart">
      <h2>Weekly Weather Forecast</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeeklyForecastChart;

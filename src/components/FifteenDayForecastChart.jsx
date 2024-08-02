import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import './FifteenDayForecastChart.css'; // Import CSS for styling

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const FifteenDayForecastChart = ({ fifteenDayForecast }) => {
  const dates = fifteenDayForecast.map(day => day.date);
  const temperaturesHigh = fifteenDayForecast.map(day => parseFloat(day.temperatureHigh));
  const temperaturesLow = fifteenDayForecast.map(day => parseFloat(day.temperatureLow));
  const windSpeeds = fifteenDayForecast.map(day => parseFloat(day.windSpeed));
  const humidityLevels = fifteenDayForecast.map(day => parseFloat(day.humidity));
  const precipitationProbabilities = fifteenDayForecast.map(day => parseFloat(day.precipitationProbability));

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'High Temperature (°C)',
        data: temperaturesHigh,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Low Temperature (°C)',
        data: temperaturesLow,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Wind Speed (km/h)',
        data: windSpeeds,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Humidity (%)',
        data: humidityLevels,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
      {
        label: 'Precipitation Probability (%)',
        data: precipitationProbabilities,
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
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
            if (label.includes('Temperature')) {
              return `${label}: ${value}°C`;
            }
            if (label.includes('Precipitation') || label.includes('Humidity')) {
              return `${label}: ${value}%`;
            }
            if (label.includes('Wind Speed')) {
              return `${label}: ${value} km/h`;
            }
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            if (this.chart.data.datasets[0].label.includes('Temperature')) {
              return value + '°C';
            }
            if (this.chart.data.datasets[0].label.includes('Precipitation') || this.chart.data.datasets[0].label.includes('Humidity')) {
              return value + '%';
            }
            if (this.chart.data.datasets[0].label.includes('Wind Speed')) {
              return value + ' km/h';
            }
            return value;
          },
        },
      },
    },
  };

  return (
    <div className="fifteen-day-forecast-chart">
      <h2>15-Day Forecast</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default FifteenDayForecastChart;

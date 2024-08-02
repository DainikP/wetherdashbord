import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './EnsembleForecastChart.css'; // Import CSS for styling

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EnsembleForecastChart = ({ ensembleForecast }) => {
  const dates = ensembleForecast.map((day) => day.date);
  const temperatureMeans = ensembleForecast.map((day) =>
    parseFloat(day.temperatureMean)
  );
  const precipitationProbabilities = ensembleForecast.map((day) =>
    parseFloat(day.precipitationProbability)
  );
  const windSpeeds = ensembleForecast.map((day) => parseFloat(day.windSpeed));
  const humidityLevels = ensembleForecast.map((day) => parseFloat(day.humidity));

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Mean Temperature (°C)',
        data: temperatureMeans,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Precipitation Probability (%)',
        data: precipitationProbabilities,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Wind Speed (km/h)',
        data: windSpeeds,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Humidity (%)',
        data: humidityLevels,
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
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
          callback: function (value, index, values) {
            const datasetLabel = this.getLabelForValue(value);
            if (datasetLabel.includes('Temperature')) {
              return value + '°C';
            }
            if (datasetLabel.includes('Precipitation') || datasetLabel.includes('Humidity')) {
              return value + '%';
            }
            if (datasetLabel.includes('Wind Speed')) {
              return value + ' km/h';
            }
            return value;
          },
        },
      },
    },
  };

  return (
    <div className="ensemble-forecast-chart">
      <h2>Ensemble Forecast</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default EnsembleForecastChart;

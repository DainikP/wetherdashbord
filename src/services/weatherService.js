import axios from 'axios';

const API_KEY = 'd0e4d4b0bd40443ea04192749240108'; // Replace with your WeatherAPI key
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getCurrentWeather = async (lat, lon) => {
  const response = await axios.get(`${BASE_URL}/current.json`, {
    params: {
      key: API_KEY,
      q: `${lat},${lon}`,
      aqi: 'no' // Disable air quality data if not needed
    },
  });
  return response.data;
};

export const getDailyWeather = async (lat, lon) => {
  const response = await axios.get(`${BASE_URL}/forecast.json`, {
    params: {
      key: API_KEY,
      q: `${lat},${lon}`,
      days: 7, // Number of days for the forecast
    },
  });
  return response.data;
};

export const calculateMonthlyAverages = (dailyData) => {
  const monthlyData = {};
  
  dailyData.forEach((day) => {
    const date = new Date(day.date_epoch * 1000);
    const month = `${date.getFullYear()}-${date.getMonth() + 1}`; // e.g., "2024-8"

    if (!monthlyData[month]) {
      monthlyData[month] = {
        temp: 0,
        count: 0,
      };
    }

    monthlyData[month].temp += day.day.avgtemp_c;
    monthlyData[month].count += 1;
  });

  Object.keys(monthlyData).forEach((month) => {
    monthlyData[month].temp /= monthlyData[month].count;
  });

  return monthlyData;
};

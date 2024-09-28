import axios from 'axios';
import React, { useState } from 'react';
import Forecast from './components/Forecast';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = async () => {
    const apiKey = 'fcde9f54650c3a1dcaa942bd95d6be21'; // Replace with your OpenWeather API key
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const weatherResponse = await axios.get(weatherApiUrl);
      const forecastResponse = await axios.get(forecastApiUrl);

      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data); // Store forecast data
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Search Section */}
        <div className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-6">Weather App</h1>
          <input
            type="text"
            placeholder="Enter city"
            className="p-3 rounded-md w-full text-gray-900"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={fetchWeather}
            className="mt-4 p-3 bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-200 w-full"
          >
            Search
          </button>
        </div>

        {/* Weather Display Section */}
        {weatherData && (
          <div className="flex items-center justify-center bg-gray-800 p-8 rounded-lg shadow-md">
            <WeatherDisplay weatherData={weatherData} />
          </div>
        )}
      </div>

      {/* Forecast Component */}
      {forecastData && (
        <div className="w-full max-w-5xl mx-auto mt-8">
          <Forecast forecastData={forecastData} />
        </div>
      )}
    </div>
  );
};

export default App;

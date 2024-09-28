import React from 'react';
import {
    WiBarometer,
    WiCloud,
    WiDayHaze,
    WiDaySunny,
    WiFog,
    WiHumidity,
    WiRain, WiSnow,
    WiStrongWind, WiSunrise, WiSunset,
    WiThunderstorm,
    WiWindy
} from 'react-icons/wi';

const WeatherDisplay = ({ weatherData }) => {
  const weatherCondition = weatherData.weather[0].main;

  const renderIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <WiDaySunny className="w-20 h-20 text-yellow-500" />;
      case 'Clouds':
        return <WiCloud className="w-20 h-20 text-gray-300" />;
      case 'Rain':
        return <WiRain className="w-20 h-20 text-blue-400" />;
      case 'Snow':
        return <WiSnow className="w-20 h-20 text-blue-200" />;
      case 'Thunderstorm':
        return <WiThunderstorm className="w-20 h-20 text-yellow-300" />;
      case 'Fog':
      case 'Mist':
        return <WiFog className="w-20 h-20 text-gray-400" />;
      case 'Haze':
        return <WiDayHaze className="w-20 h-20 text-orange-300" />;
      case 'Drizzle':
        return <WiRain className="w-20 h-20 text-blue-300" />;
      default:
        return <WiCloud className="w-20 h-20 text-gray-400" />;
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Weather in {weatherData.name}</h2>

      {/* Display Weather Icon */}
      {renderIcon(weatherCondition)}

      <p className="text-lg md:text-xl mt-4">Temperature: {weatherData.main.temp}°C</p>
      <p className="text-lg">Feels like: {weatherData.main.feels_like}°C</p>
      <p className="text-md md:text-lg">Condition: {weatherCondition}</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Humidity */}
        <div className="flex items-center">
          <WiHumidity className="text-blue-300 w-8 h-8" />
          <p className="ml-2 text-md">Humidity: {weatherData.main.humidity}%</p>
        </div>
        {/* Pressure */}
        <div className="flex items-center">
          <WiBarometer className="text-gray-500 w-8 h-8" />
          <p className="ml-2 text-md">Pressure: {weatherData.main.pressure} hPa</p>
        </div>
        {/* Visibility */}
        <div className="flex items-center">
          <WiDayHaze className="text-gray-300 w-8 h-8" />
          <p className="ml-2 text-md">Visibility: {weatherData.visibility / 1000} km</p>
        </div>
        {/* Wind Speed */}
        <div className="flex items-center">
          <WiStrongWind className="text-blue-400 w-8 h-8" />
          <p className="ml-2 text-md">Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
        {/* Wind Gust */}
        {weatherData.wind.gust && (
          <div className="flex items-center">
            <WiWindy className="text-green-400 w-8 h-8" />
            <p className="ml-2 text-md">Wind Gust: {weatherData.wind.gust} m/s</p>
          </div>
        )}
        {/* Sunrise */}
        <div className="flex items-center">
          <WiSunrise className="text-orange-500 w-8 h-8" />
          <p className="ml-2 text-md">Sunrise: {formatTime(weatherData.sys.sunrise)}</p>
        </div>
        {/* Sunset */}
        <div className="flex items-center">
          <WiSunset className="text-red-500 w-8 h-8" />
          <p className="ml-2 text-md">Sunset: {formatTime(weatherData.sys.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;

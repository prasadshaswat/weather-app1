import React from 'react';
import { WiCloud, WiDayHaze, WiDaySunny, WiFog, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

const Forecast = ({ forecastData }) => {

  const renderIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <WiDaySunny className="w-16 h-16 text-yellow-500" />;
      case 'Clouds':
        return <WiCloud className="w-16 h-16 text-gray-300" />;
      case 'Rain':
        return <WiRain className="w-16 h-16 text-blue-400" />;
      case 'Snow':
        return <WiSnow className="w-16 h-16 text-blue-200" />;
      case 'Thunderstorm':
        return <WiThunderstorm className="w-16 h-16 text-yellow-300" />;
      case 'Fog':
      case 'Mist':
        return <WiFog className="w-16 h-16 text-gray-400" />;
      case 'Haze':
        return <WiDayHaze className="w-16 h-16 text-orange-300" />;
      case 'Drizzle':
        return <WiRain className="w-16 h-16 text-blue-300" />;
      default:
        return <WiCloud className="w-16 h-16 text-gray-400" />;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {forecastData.list.slice(0, 5).map((forecast, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
          <p className="text-lg font-bold">{new Date(forecast.dt_txt).toLocaleDateString()}</p>
          <p>{new Date(forecast.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          {renderIcon(forecast.weather[0].main)}
          <p className="text-lg mt-2">{forecast.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;

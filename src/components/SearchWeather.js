import React, { useState } from 'react';

const SearchWeather = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Search Weather</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        onClick={handleSearch}
        className="mt-4 px-4 py-2 bg-pink-500 rounded-md text-white font-bold hover:bg-pink-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchWeather;

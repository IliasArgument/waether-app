import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import { Spin, Space } from 'antd';
import { onChangeColor } from './utils';
import { Slider } from 'antd';
import api from './api.js';

function App() {

  const [query, setQuery] = useState('');
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [temperature, setTemperature] = useState()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    api.getWeather(lat, long, query)
      .then(weather => {
        setWeatherData(weather);
        setTemperature(weather?.main.temp)
      })
  }, [lat, long, query])

  let background = onChangeColor(temperature);

  let onChangeTepm = (value) => {
    setTemperature(value)
  }

  return (
    <div className="App">
      <main style={{ background: background }}>
        <Search setQuery={setQuery} />
        {weatherData?.weather ? (
          <div>
            <Weather weatherData={weatherData} temperature={temperature} />
            <Slider value={Math.round(temperature)} onChange={onChangeTepm} min={-30} max={60} />
          </div>
        ) : (
          <Space size="middle">
            <Spin size="large" />
          </Space>
        )}
      </main>
    </div>
  );
}

export default App;

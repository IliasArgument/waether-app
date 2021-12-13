import React from 'react';
import moment from 'moment'
import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const WeatherIcon = styled.div`
color: whitesmoke;
`;

const WeatherBox = ({ weatherData, temperature }) => {


    let weatherIcon = null;

    if (weatherData.weather[0].main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (weatherData.weather[0].main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (weatherData.weather[0].main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (weatherData.weather[0].main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (weatherData.weather[0].main === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (weatherData.weather[0].main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }

    return (
        <div className="weather_box">
            <div className="location_content">
                <div className="location">
                    {weatherData?.name}
                </div>
                <div className="date">
                    <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                </div>
            </div>
            <div className="weather_content">
                <div className="temp">{Math.round(temperature)}°C</div>
                <div className="weather_block">
                    <div className="weather">{weatherData.weather[0].main}</div>
                    <WeatherIcon style={{ fontSize: 30, marginTop: 15 }}>{weatherIcon}</WeatherIcon>
                </div>
            </div>
        </div>
    );
};

export default WeatherBox;
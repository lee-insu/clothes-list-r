import React from 'react';
import TodayWeatherClothes from '../today_weather_clothes/today_weather_clothes.jsx';
import TodayWeatherCtn from '../today_weather_ctn/today_weather_ctn.jsx';

const TodayWeather = () => (
        <>
        <TodayWeatherCtn />
        <ul>
        <TodayWeatherClothes />
        </ul>
        </>  
    );

export default TodayWeather;
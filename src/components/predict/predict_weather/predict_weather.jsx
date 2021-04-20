import React from 'react';
import PredictWeatherCtn from '../predict_weather_ctn/predict_weather_ctn';
import PredictWeatherList from '../predict_weather_list/predict_weather_list';

const PredictWeather = () => (
            <>
            <PredictWeatherCtn />
            <ul>
                <PredictWeatherList />
            </ul>
            </>
    );

export default PredictWeather;
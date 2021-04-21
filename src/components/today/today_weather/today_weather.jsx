import React, { useState } from 'react';
import TodayWeatherClothes from '../today_weather_clothes/today_weather_clothes.jsx';
import TodayWeatherCtn from '../today_weather_ctn/today_weather_ctn.jsx';



const TodayWeather = () => {

    const[query,setQuery] = useState('');
    const[weather,setWeather] = useState({});

    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;


    const search = e => {
        if(e.key === 'Enter') {
            fetch(apiUrl)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
            });
                
                console.log(weather.main);
        }
    }

    return(    
        <>
        <input type="text"
               onChange = { e => setQuery(e.target.value) }
               value = {query}
               onKeyPress = {search}
        />
        {(typeof weather.main != "undefined") ? (
        <TodayWeatherCtn weather={weather}/>): ('')}
        <ul> 
        <TodayWeatherClothes />
        </ul>
        </> 
    ) 
};

export default TodayWeather;
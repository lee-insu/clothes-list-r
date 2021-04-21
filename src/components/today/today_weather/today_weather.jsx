import React, { useState } from 'react';
import TodayClothesList from '../today_clothes_list/today_clothes_list.jsx';
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
                
                console.log(weather.weather);
        }
    }

    return(    
        <>
        <input type="text"
               onChange = { e => setQuery(e.target.value) }
               value = {query}
               onKeyPress = {search}
        />
        <TodayWeatherCtn weather={weather}/>
        <ul>
        <TodayClothesList />
        </ul>
        </> 
    ) 
};

export default TodayWeather;
import React, { useState } from 'react';
import PlaceWeatherCtn from '../place_weather_ctn/place_weather_ctn';
import PlaceWeatherList from '../place_weather_list/place_weather_list';

const PlaceWeather = () => {



        navigator.geolocation.getCurrentPosition(handleGeoSucc,handleGeoFail)
    
              function handleGeoSucc(position) {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                     const location = {lat,lon}
                  getWeather(location);
              };

              function handleGeoFail() {
                  console.log('location error');
                  navigator.geolocation.getCurrentPosition(handleGeoSucc,handleGeoFail)
              }

              const [weather,setWeather] = useState({});
              const [listTemp,setListTemp] = useState({});

              const apiKey = process.env.REACT_APP_API_KEY;

              function getWeather(location){
                  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`)
                  .then(res => res.json())
                  .then(result => {
                          setWeather(result);
                          setListTemp(result.main.temp);
                  });
              }


   
    return(
            <>
            <PlaceWeatherCtn weather = {weather} />
            <ul>
                <PlaceWeatherList temp = {listTemp}/>
            </ul>
            </>
        )
    };

export default PlaceWeather;
import React, { useState } from 'react';
import PlaceWeatherCtn from '../place_weather_ctn/place_weather_ctn';
import PlaceWeatherList from '../place_weather_list/place_weather_list';

const PlaceWeather = () => {


    const apiKey = process.env.REACT_APP_API_KEY;
    const [weather,setWeather] = useState({});
    const [listTemp,setListTemp] = useState({});

    /*
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=${apiKey}`)
    .then(res => res.json())
    .then(result => {
        setWeather(result);
        setListTemp(result.main.temp);
              });
    console.log("ll")
    */
    

    function locationClick() {
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

              function getWeather(location){
                  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`)
                  .then(res => res.json())
                  .then(result => {
                          setWeather(result);
                          setListTemp(result.main.temp);
                  });
              }
          
       };


   
    return(
            <>
            <button onClick = {locationClick()}>현재 지역</button>
            <PlaceWeatherCtn weather = {weather} />
            <ul>
                <PlaceWeatherList temp = {listTemp}/>
            </ul>
            </>
        )
    };

export default PlaceWeather;
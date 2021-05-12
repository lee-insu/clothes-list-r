import React, { useEffect, useState } from 'react';
import PlaceWeatherCtn from '../place_weather_ctn/place_weather_ctn';
import PlaceWeatherList from '../place_weather_list/place_weather_list';

const PlaceWeather = ({storage}) => {

    const dateBulider = (d) => {
        let months = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",];
        let days = ["월","화","수","목","금","토","일"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${month},${date}일, ${day}요일,  ${year}년`

    }

    const [weather,setWeather] = useState({});
    const [listTemp,setListTemp] = useState({});
    
    useEffect(() => {

        const apiKey = process.env.REACT_APP_API_KEY;

        navigator.geolocation.getCurrentPosition(handleGeoSucc,handleGeoFail)

        function handleGeoSucc(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
            .then(res => res.json())
            .then(result => {
                    setWeather(result);
                    setListTemp(result.main.temp);
            });
      };

        function handleGeoFail() {
         console.log('location error');
         navigator.geolocation.getCurrentPosition(handleGeoSucc,handleGeoFail)
    }

    },[])


   
    return(
            <>
             <div className="date">{dateBulider(new Date())}</div>
            <PlaceWeatherCtn weather = {weather} />
            <ul>
                <PlaceWeatherList temp = {listTemp}/>
            </ul>
            </>
        )
    };

export default PlaceWeather;
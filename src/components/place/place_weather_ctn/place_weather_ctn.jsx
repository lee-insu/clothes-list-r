import React from 'react';

const PlaceWeatherCtn = e => {


    return (
        <nav className="location-box">
        {(typeof e.weather.main !== "undefined") ? (
            <div className="location">{e.weather.name},
            {Math.round(e.weather.main.temp)-273}도,
            {e.weather.weather[0].main}
            </div>
        ):('')}

        </nav>

    )
};
export default PlaceWeatherCtn;
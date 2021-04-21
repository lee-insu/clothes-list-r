import React from 'react';

const TodayWeatherCtn = e => {

    const dateBulider = (d) => {
        let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
        let days = ["mon","tue","wed","thu","fri","sat","sun"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${date}, ${day}, ${month}, ${year}`

    }

      return (
            <nav className="location-box">
                <div className="location">{e.weather.name}, 
                {Math.round(e.weather.main.temp)},
                {e.weather.weather[0].main}

                </div> 
                <div className="date">{dateBulider(new Date())}</div>
            </nav>
    )
    };

export default TodayWeatherCtn;
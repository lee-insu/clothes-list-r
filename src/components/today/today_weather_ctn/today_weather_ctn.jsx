import React from 'react';


const TodayWeatherCtn = e => {

    const dateBulider = (d) => {
        let months = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",];
        let days = ["월","화","수","목","금","토","일"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${month},${date}일, ${day}요일,  ${year}년`

    }

      return (
          <>
            <nav className="location-box">
                {(typeof e.weather.main != "undefined") ? (
                <div className="location">{e.weather.name}, 
                {Math.round(e.weather.main.temp)-273}도,
                {e.weather.weather[0].main}
                </div> ):('')}
                <div className="date">{dateBulider(new Date())}</div>
            </nav>
        </>
    )
    };

export default TodayWeatherCtn;
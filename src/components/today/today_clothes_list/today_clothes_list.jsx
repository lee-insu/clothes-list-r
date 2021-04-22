import React from 'react';

const TodayClothesList = e => {

   const temp = Math.round(e.temp)-273;

    
        let season = ""

        switch(true) {
            case (temp < 30):
                season = "sum"
                break;
            case (temp < 20):
                season = "null"
                break;

            default :
                ;

            return season;
        }

    return (
    <li>{season}</li>
    );
}

export default TodayClothesList;
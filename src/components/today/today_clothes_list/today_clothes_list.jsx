import React from 'react';

const TodayClothesList = e => {

   const temp = Math.round(e.temp)-273;

    
        let season = ""

        switch(true) {
            case (temp < -3):
                season = "패딩,두꺼운 옷"
                break;
            case (temp < 4):
                season = "패딩,두꺼운 코트,누빔 옷, 기모, 목도리"
                break;
            case (temp < 8):
                season = "울 코트, 히트텍, 가죽 옷, 기모"
                break;
            case (temp < 11):
                season = "트렌치 코트, 야상, 점퍼, 스타킹, 기모바지"
                break;
            case (temp < 16):
                season = "자켓, 가디건, 청자켓, 니트, 스타킹, 청바지"
                break;
            case (temp < 19):
                season = "얇은 가디건, 니트, 맨투맨, 후드, 긴 바지"
                break;
            case (temp < 22):
                season = "블라우스, 긴발티, 면바지, 슬렉스"
                break;
            case (temp < 27):
                season = "반팔, 얇은 셔츠, 반바지, 면바지, 나시"
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
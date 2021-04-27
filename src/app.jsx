import Header from './components/header/header';
import TodayWeather from './components/today/today_weather/today_weather';
import styles from './app.module.css';
import PlaceWeather from './components/place/place_weather/place_weather';


function App() {
  return (
      <div className={styles.inner}>
        <Header />
        <PlaceWeather />
        <TodayWeather />
      </div>
      
  );
}

export default App;

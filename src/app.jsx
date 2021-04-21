import Header from './components/header/header';
import TodayWeather from './components/today/today_weather/today_weather';
import styles from './app.module.css';
import PredictWeather from './components/predict/predict_weather/predict_weather';


const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;


function App() {
  return (
      <div className={styles.inner}>
        <Header />
        <TodayWeather />
        <PredictWeather/>
      </div>
      
  );
}

export default App;

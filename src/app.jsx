import Header from './components/header/header';
import TodayWeather from './components/today/today_weather/today_weather';
import styles from './app.module.css';
import PredictWeather from './components/predict/predict_weather/predict_weather';

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

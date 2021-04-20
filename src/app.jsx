import Header from './components/header/header';
import Weather from './components/weather/weather';
import styles from './app.module.css';

function App() {
  return (
      <div className={styles.inner}>
        <Header />
        <Weather />
      </div>
      
  );
}

export default App;

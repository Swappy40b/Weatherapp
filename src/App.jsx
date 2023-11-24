import logo from './logo.svg';
import './App.css';
import FindCity from './components/FindCity';
import WeatherDetails from './components/WeatherDetails';

function App() {
  return (
    <>
    
   <main className="container">
      <div className="section row justify-content-center">
        <div className="section col-lg-6 col-12">
          <p className="text-center h4 mt-5">
            Weather App
          </p>
            <FindCity />
            <WeatherDetails/>
        </div>
      </div>


  </main>
    </>
      
    
  );
}

export default App;

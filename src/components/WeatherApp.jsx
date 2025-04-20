import { useState } from 'react';
import staticData from './staticWeatherData';
import SearchBox from './SearchBox';
import WeatherInfo from './WeatherInfo';
import DetailsBox from './DetailsBox';

function WeatherApp(){

const[city, setCity] = useState('')
const [weather, setWeather] = useState(staticData["istanbul"]);

const handleChange = (e) => {
  setCity(e.target.value);
}  

const getWeatherData = async ()=> {

const apiKey = '';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

if (!apiKey) {
  const formattedCity = city.trim().toLowerCase();
  const staticCityData = staticData[formattedCity];

  if (staticCityData) {
    setWeather(staticCityData);
    setCity('');
  } else {
    alert("Static data not found for this city.");
    setCity('');
  }
  return;
}
try {
  const response = await axios.get(BASE_URL);
  setWeather(response.data);
  setCity('');
} catch (error) {
  console.error('API Error:', error);
}
};

const handleFormSubmit = (e) => {
e.preventDefault();
getWeatherData();
};

return (
  <div>
    <SearchBox 
        city={city} 
        onCityChange={handleChange} 
        onFormSubmit={handleFormSubmit} 
      />
       <WeatherInfo weather={weather} />
       <DetailsBox weather={weather} />
  </div>
);
};
  export default WeatherApp;

import { useEffect , useState } from 'react';
import sunImage from '../assets/Sun.png';
import cloudsImage from '../assets/Clouds.png';
import rainImage from '../assets/Rain.png';
import snowImage from '../assets/Snow.png';
import fogImage from '../assets/Fog.png';
import stormImage from '../assets/Storm.png';
import thunderstormImage from '../assets/ThunderStorm.png';
import dustImage from '../assets/Dust.png';





function WeatherInfo( { weather }) {

  const [Icon, setIcon] = useState(sunImage);
  const [fade, setFade] = useState(true);

  const [displayTemp, setDisplayTemp] = useState(0);
  const [tfade, setTfade] = useState(true);

  useEffect(() => {

    if (weather) {
    setFade(false);
    const main = weather.weather[0].main;

    let weatherIcon = sunImage;

    switch (main) {
      case 'Clear':
        weatherIcon = sunImage;
        break;
      case 'Rain':
        weatherIcon = rainImage;
        break;
      case 'Clouds':
        weatherIcon = cloudsImage;
        break;
      case 'Snow':
        weatherIcon = snowImage;
        break;
        case 'Fog':
        weatherIcon = fogImage;
        break;
      case 'Storm':
        weatherIcon = stormImage;
        break;
      case 'Thunderstorm':
        weatherIcon = thunderstormImage;
        break;
      case 'Dust':
        weatherIcon = dustImage;
        break;
    }

    setTimeout(() => {
      setIcon(weatherIcon);
      setFade(true);
    }, 500);
    }
  },[weather]);

  useEffect (() => {
if(weather){
  const newtemp = weather.main.temp;
  setDisplayTemp(newtemp);
  setTfade(false);

  setTimeout(()=>{
    setTfade(true);
  }, 500);
}
}, [weather]);

  return (

    <div className="flex justify-center m-1 gap-10">
      <img className={`w-1/4 transition-all duration-500 ease-in-out transform hover:scale-110 ${fade ? 'opacity-100' : 'opacity-0'}`} 
      src={Icon} 
      alt="Weather Icon" />
     <div className="flex flex-col items-center justify-center gap-2">
        {weather && (
          <>
            <h1 className={`font-sans font-bold text-6xl text-white transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-2 ${tfade ? 'text-6xl opacity-100' : 'text-xl opacity-0'}`}>
            {weather.main.temp}°C</h1>
            <h2 className={`font-sans text-white transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-2 ${tfade ? 'text-3xl opacity-100' : 'text-xl opacity-0'}`}>
              {weather.name}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherInfo;
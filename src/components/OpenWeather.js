import React, {useEffect, useState} from 'react';
import Switch from '@material-ui/core/Switch';

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const OpenWeather = (props) => {
  const [ units, setUnits ] = useState("F");
  const [results, setResults] = useState({main: {temp: ""}, weather: [""]});
  const { latitude, longitude } = props;

  const handleChange = () => setUnits(units === "F"? "C" : "F") ;
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    const key = 'b7958e839f70944ee351c9725be8c02d';

    useEffect(() => {
      if (latitude && longitude) {

      //  console.log(latitude, longitude);
      
      let url = `${baseURL}?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`;
    
        fetch(url)
          .then(res => res.json())
          .then((json) => {
            console.log(json);
            setResults(json);
          })       
           .catch(err => console.log(err))
    }
    }, [latitude, longitude]);


      return(
        <div>
          <p>{units === "F" ? results.main.temp : (results.main.temp - 32) * 5/9} {units}</p>
      <p><img src={`https://openweathermap.org/img/wn/${results.weather[0].icon}.png`} alt="icon" /><br/><span>{results.weather[0].description}</span></p>
          <Switch
            checked={units === "F" ? true : false}
            onChange={handleChange}
          />
          <p>Celsius / Fahrenheit</p>
        </div>

      );
};

export default OpenWeather;

//example json result

/* {"coord": { "lon": 139,"lat": 35},
     "weather": [
       {
         "id": 800,
         "main": "Clear",
         "description": "clear sky",
         "icon": "01n"
       }
     ],
     "base": "stations",
     "main": {
       "temp": 281.52,
       "feels_like": 278.99,
       "temp_min": 280.15,
       "temp_max": 283.71,
       "pressure": 1016,
       "humidity": 93
     },
     "wind": {
       "speed": 0.47,
       "deg": 107.538
     },
     "clouds": {
       "all": 2
     },
     "dt": 1560350192,
     "sys": {
       "type": 3,
       "id": 2019346,
       "message": 0.0065,
       "country": "JP",
       "sunrise": 1560281377,
       "sunset": 1560333478
     },
     "timezone": 32400,
     "id": 1851632,
     "name": "Shuzenji",
     "cod": 200
     } 
     
           <div key={result.weather}>
           <h2>{result.main}</h2>
            {result.icon} 
            <p> {result.temp}</p>
          <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
      </div>
     
      
     // const Switches = () => {
      //  const [state, setState] = React.useState({
    //      checkedA: true,
     //     checkedB: true,
     //   });
  
      
     //   const handleChange = (event) => {
     //     setState({ ...state, [event.target.name]: event.target.checked });
      //  };
      //      if ( switchB === true) {
       //     } else {
         //   };
//double check switch syntax
        //result. syntax may be an issue + result.icon will have type issues -> call another api?
     
     
     */

<<<<<<< .merge_file_sobAJG
import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";
import "./App.css";
import Zomato from "./components/Zomato";
=======

import React, { useState, useEffect } from "react";
import "./App.css";
import { usePosition } from "use-position";
// import Zomato from "./components/Zomato";
import OpenWeather from "./components/OpenWeather";
>>>>>>> .merge_file_er6EmK

function App() {
  const { latitude, longitude } = usePosition();
  const [location, setLocation] = useState({});
  useEffect(() => {
<<<<<<< .merge_file_sobAJG
    setLocation({ latitude: latitude, longitude: longitude });
  }, [latitude, longitude]);
  return (
    <div className="App">
      <Zomato latitude={location.latitude} longitude={location.longitude} />
=======
    setLocation({latitude: latitude, longitude: longitude})
    console.log(latitude, longitude)
  }, [latitude, longitude]);
  return (
    <div className="App">

      <OpenWeather latitude={location.latitude} longitude={location.longitude} />
>>>>>>> .merge_file_er6EmK
    </div>
  );
}

export default App;
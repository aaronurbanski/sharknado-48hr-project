
import React, { useState, useEffect } from "react";
import "./App.css";
import { usePosition } from "use-position";
// import Zomato from "./components/Zomato";
import OpenWeather from "./components/OpenWeather";

function App() {
  const { latitude, longitude } = usePosition();
  const [location, setLocation] = useState({});
  useEffect(() => {
    setLocation({latitude: latitude, longitude: longitude})
    console.log(latitude, longitude)
  }, [latitude, longitude]);
  return (
    <div className="App">

      <OpenWeather latitude={location.latitude} longitude={location.longitude} />
    </div>
  );
}

export default App;
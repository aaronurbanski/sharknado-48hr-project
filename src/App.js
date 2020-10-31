import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";
import "./App.css";
import Zomato from "./components/Zomato";

function App() {
  const { latitude, longitude } = usePosition();
  const [location, setLocation] = useState({});
  useEffect(() => {
    setLocation({ latitude: latitude, longitude: longitude });
  }, [latitude, longitude]);
  return (
    <div className="App">
      <Zomato latitude={location.latitude} longitude={location.longitude} />
    </div>
  );
}

export default App;

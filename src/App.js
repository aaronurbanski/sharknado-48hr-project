import './App.css';
import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";
import 'fontsource-roboto';

import Navtabs from './components/Navtabs';


function App() {
  const { latitude, longitude } = usePosition();
  const [location, setLocation] = useState({});
  useEffect(() => {
    setLocation({ latitude: latitude, longitude: longitude });
  }, [latitude, longitude]);
  return (
    <div className="App">
      <Navtabs latitude={location.latitude} longitude={location.longitude}/>
    </div>
  );
}

export default App;

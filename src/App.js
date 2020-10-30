import React from "react";
import "./App.css";
import { usePosition } from "use-position";
import Zomato from "./components/Zomato";

function App() {
  const { latitude, longitude } = usePosition();
  return (
    <div className="App">
      <Zomato latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;

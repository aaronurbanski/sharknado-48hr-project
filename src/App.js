import './App.css';
import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";
import 'fontsource-roboto';
import Navtabs from './components/Navtabs';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BottomAppBar from './components/BottomBar';

function App() {
  const { latitude, longitude } = usePosition();
  const [location, setLocation] = useState({});
  const darkTheme = createMuiTheme( {
    palette: {
      type: 'dark',
    }
  });
  useEffect(() => {
    setLocation({ latitude: latitude, longitude: longitude });
  }, [latitude, longitude]);
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <Navtabs latitude={location.latitude} longitude={location.longitude}/>
      <BottomAppBar latitude={location.latitude} longitude={location.longitude}/>
      </ThemeProvider>
    </div>
  );
}

export default App;

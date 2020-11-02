import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { usePosition } from 'use-position';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));



const GetLocation = () => {
    const [ lat, setLat ] = useState('');
    const [ lon, setLon ] = useState('');

    const {
        latitude,
        longitude,
        error,
      } = usePosition();
    
      return (
        <div className="App">
          latitude: {latitude} // longitude: {longitude} // error: {error}
        </div>
      );
}

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            <GetLocation />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

//export default GetLocation;

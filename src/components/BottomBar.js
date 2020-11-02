import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GlobeIcon from '@material-ui/icons/Language';
import './BottomBar.css'


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(1),
    textTransform: 'uppercase',
    fontSize: '.3em'
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center'
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function BottomAppBar(props) {
  const classes = useStyles();
  const { latitude, longitude } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
         <Typography>
         
         <p><GlobeIcon /><br/><span>Longitude: {longitude} <br/> Latitude: {latitude}</span></p>
         </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

import React, { useState, useEffect } from 'react';
import { usePosition } from "use-position";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import SatelliteIcon from '@material-ui/icons/Satellite';
import GlobeIcon from '@material-ui/icons/Language';
import ImgMediaCard from './Card';
import OpenWeather from './OpenWeather';

function NasaBg2(props){
    let nasaLink = localStorage.getItem("nasaLink");
   // localStorage.setItem("nasaLink", response.data.url);
    const [ bg, setBg ] = useState({ backgroundImage: [] });
    const { latitude, longitude } = props;
    const apiKey = "Dj8U9a8JioutiPstpuNbidkgDxSidhRYfXJQNcUI";
    const apiURL = `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=2020-09-01&dim=0.3&api_key=${apiKey}`;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const bgResult = await axios(`https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=2020-09-01&dim=0.60&api_key=${apiKey}`); 
    //         setBg(bgResult.data.url); 
    //     };
    //     fetchData();
    // }, ['']);
    
    const classes = useStyles();
    const fetchData = async () => {
        const response = await axios.get(apiURL);
        setBg(response.data.url); 
    }
    return (
        <div>
            <h1>Smile, you're on NASA cam...</h1>
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={fetchData}
            startIcon={<GlobeIcon />}
            >
            Fetch Local Environment<br/>
            Latitude: {latitude}<br/>
            Longitude: {longitude}
            </Button>
            <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh'}}>
            </div>
        </div>
    )
}

export default NasaBg2;

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
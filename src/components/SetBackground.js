import React, { useState, useEffect } from 'react';
import { usePosition } from "use-position";


const NasaBg = (props) => {
    const [ bg, setBg ] = useState('');
    const { latitude, longitude } = props;
    const apiKey = "Dj8U9a8JioutiPstpuNbidkgDxSidhRYfXJQNcUI";
    useEffect(() => {
      console.log(latitude, longitude);
      if (latitude && longitude) {
        let url = `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=2020-09-01&dim=0.2&api_key=${apiKey}`;
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setBg(json.url);
          })
          .catch((err) => console.log(err));
      }
    }, [latitude, longitude]);
    return (
      <div>
        <h1>Smile, you're on NASA cam...</h1>
            <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh'}}>
            </div>
      </div>
    );
  };

  
export default NasaBg;

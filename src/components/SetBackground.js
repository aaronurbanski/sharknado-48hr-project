import { ContactSupportOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


let lon = -86.89;
let lat = 41.70;
let url =`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2020-09-01&dim=0.60&api_key=Dj8U9a8JioutiPstpuNbidkgDxSidhRYfXJQNcUI`;

const fetchBackground = () => {
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

const SetBackground = () => {

    const [ bgImg, setBgImg ] = useState(null);

    useEffect(() => {
        fetchBackground().then(img => {
            setBgImg(bgImg);
        }, []);
    });




    return (
        <div style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', height: '100vh'}}>
        </div>
    )

} 

export default SetBackground;
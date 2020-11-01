import React, { useState, useEffect } from "react";

const Zomato = (props) => {
  const [obj, setObj] = useState({ restaurants: [] });
  const { latitude, longitude } = props;
  const apiKey = "74410b44d09902e6ebbd8cccb5ffe7b8";
  useEffect(() => {
//    console.log(latitude, longitude);
    if (latitude && longitude) {
      let url = `https://developers.zomato.com/api/v2.1/search?user-key=${apiKey}&lat=${latitude}&lon=${longitude}&sort=real_distance`;
 //     console.log(url);
      fetch(url, {
        headers: new Headers({
          "Access-Control-Allow-Origin": "*",
          "X-Zomato-API-Key": "74410b44d09902e6ebbd8cccb5ffe7b8",
        }),
      })
        .then((res) => res.json())
        .then((json) => {
  //        console.log(json);
          setObj(json);
        })
        .catch((err) => console.log(err));
    }
  }, [latitude, longitude]);
  const mapRestaurants = (obj) => {
    if (obj.restaurants) {
      return obj.restaurants.map((array, index) => {
        return <p key={index}>{array.restaurant.name}</p>;
      });
    }
  };
  return (
    <div>
      <h1>Restaurants</h1>
      <div>{mapRestaurants(obj)}</div>
    </div>
  );
};

export default Zomato;

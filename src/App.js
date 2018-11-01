import React from 'react';

const Result=(props)=>{
  return(
<div>
        <ul className="weatherList">
        <li>Area Name: {props.name}</li>
            <li>Country             : {props.country}</li>
            <li>Temparature         : {props.temp}°C</li>
            <li>Min temperature     : {props.min}°C</li>
            <li>Max temperature     : {props.max}°C</li>
            <li>Weather             : {props.weather}</li>
            <li>Clouds              : {props.clouds}</li>
            <li>Wind Speed          : {props.wind}</li>
        </ul>
    </div>
  )  
}

export default Result;

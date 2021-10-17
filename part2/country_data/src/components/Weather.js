import axios from 'axios'
import { useState, useEffect } from 'react'

const Weather = ({ city }) => {
    const [cityWeather, setCityWeather] = useState(null);
    console.log(cityWeather)


    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY;
        const params = {
        access_key: api_key,
        query: { city },
        };
        axios
        .get("http://api.weatherstack.com/current", { params })
        .then((response) => {
            setCityWeather(response.data);
        });
    }, [city]);

    // loading state
    if (!cityWeather) return null

        return (
        <div>
            <li>temperature: {cityWeather.current.temperature} celsius</li> 
            <li>wind: {cityWeather.current.wind_speed} mph</li>
            <img src={cityWeather.current.weather_icons} alt='weather_icon' />
        </div>
        

        );
    };

export default Weather

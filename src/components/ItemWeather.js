import React from 'react';
import 'antd/dist/antd.css';
import '../styles/index.css';
import {WiCelsius} from "weather-icons-react";
import {WindIcon} from "./WindIcon";
import {WindDirection} from "./WindDirection";

const ItemWeather = (props) => {
    const {weather, main, wind} = props.props;
    const date = new Date(props.props.dt * 1000).toLocaleString('ru', {
        hour: 'numeric',
        minute: 'numeric',
    });
    return (
        <div className="flex-container-left row weather-day">
            <div>
                {date}
            </div>
            <div className='flex-container-left row'>
                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description}/>
                {main.temp}
                <WiCelsius size={34}/>
                <WindIcon speed={wind.speed}/>
                <WindDirection deg={wind.deg}/>
            </div>
        </div>

    )
};

export default ItemWeather;



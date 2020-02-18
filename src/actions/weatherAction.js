import axios from "axios";

import {
    GET_WEATHER_PENDING,
    GET_WEATHER_REJECTED,
    GET_WEATHER_RESOLVED,
    GET_WEATHER_FIVE_DAYS_PENDING,
    GET_WEATHER_FIVE_DAYS_RESOLVED,
    GET_WEATHER_FIVE_DAYS_REJECTED,
    URL_WEATHER,
    URL_WEATHER_FIVE_DAYS,
} from "../constants";

const getWeatherForOneDayPending = () => ({
    type: GET_WEATHER_PENDING
});

const getWeatherForOneDayResolved = (weatherData) => ({
    type: GET_WEATHER_RESOLVED,
    payLoad: {
        weatherData
    }
});

const getWeatherForOneDayRejected = () => ({
    type: GET_WEATHER_REJECTED,
    payLoad: "Something wrong!"
});

export const getWeatherForOneDay = () => (dispatch) => {
    dispatch(getWeatherForOneDayPending());
    axios.get(URL_WEATHER)
        .then(({data}) => {
            dispatch(getWeatherForOneDayResolved((data)));
        })
        .catch((error) => {
            console.log(error);
            dispatch(getWeatherForOneDayRejected());
        })
};
const getWeatherForFiveDaysPending = () => ({
    type: GET_WEATHER_FIVE_DAYS_PENDING
});

const getWeatherForFiveDaysResolved = (weatherDataList) => ({
    type: GET_WEATHER_FIVE_DAYS_RESOLVED,
    payLoad: {
        weatherDataList
    }
});

const getWeatherForFiveDaysRejected = () => ({
    type: GET_WEATHER_FIVE_DAYS_REJECTED,
    payLoad: "Something wrong!"
});

export const getWeatherForFiveDays = () => (dispatch) => {
    dispatch(getWeatherForFiveDaysPending());
    axios.get(URL_WEATHER_FIVE_DAYS)
        .then(({data}) => {
            dispatch(getWeatherForFiveDaysResolved(data));
        })
        .catch((error) => {
            console.log(error);
            dispatch(getWeatherForFiveDaysRejected());
        })
};



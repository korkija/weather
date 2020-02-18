import {
    GET_WEATHER_PENDING,
    GET_WEATHER_REJECTED,
    GET_WEATHER_RESOLVED,
    GET_WEATHER_FIVE_DAYS_PENDING,
    GET_WEATHER_FIVE_DAYS_RESOLVED,
    GET_WEATHER_FIVE_DAYS_REJECTED,
} from "../constants";

const INITIAL_DATA = {
    isLoading: true,
    isLoadingFiveDays: true,
    weatherForSeveralDays: [],
    weatherForDay: {},
};

export const weather = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case GET_WEATHER_PENDING: {
            return {
                ...state,
                isLoading: true,
                errorMsg: ""
            };
        }
        case GET_WEATHER_RESOLVED: {
            return {
                ...state,
                isLoading: false,
                weatherForDay: action.payLoad.weatherData,
            };
        }
        case GET_WEATHER_REJECTED: {
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payLoad
            };
        }
        case GET_WEATHER_FIVE_DAYS_PENDING: {
            return {
                ...state,
                isLoadingFiveDays: true,
                errorMsg: ""
            };
        }
        case GET_WEATHER_FIVE_DAYS_RESOLVED: {
            return {
                ...state,
                isLoadingFiveDays: false,
                weatherForSeveralDays: action.payLoad.weatherDataList.list,
            };
        }
        case GET_WEATHER_FIVE_DAYS_REJECTED: {
            return {
                ...state,
                isLoadingFiveDays: false,
                errorMsg: action.payLoad
            };
        }
        default: {
            return state;
        }
    }
};

import React from 'react';
import 'antd/dist/antd.css';
import '../styles/index.css';
import {connect} from "react-redux";
import {getWeatherForOneDay} from '../actions/weatherAction'
import ItemWeather from "./ItemWeather";
import {history} from "../App";

class OneDay extends React.Component {

    componentDidMount() {
        this.props.getWeatherForOneDay();
    }

    render() {
        const typeDateDate = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const isLoading = this.props.isLoading;
        return (
            isLoading
                ? <div>Loading</div>
                :
                this.props.weatherForDay.weather
                    ?
                    <div>
                        <div>{new Date(this.props.weatherForDay.dt * 1000).toLocaleString('ru', typeDateDate)}</div>
                        <ItemWeather props={this.props.weatherForDay}/>
                        <button className={"button-choose"} onClick={history.goBack}>Back</button>
                    </div>
                    : <div>Doesn't have information</div>
        )
    };
}

const mapStateToProps = (state) => ({
    isLoading: state.weather.isLoading,
    weatherForDay: state.weather.weatherForDay
});

const mapDispatchToProps = {
    getWeatherForOneDay,
};
export const
    OneDayContainer = connect(
        mapStateToProps,
        mapDispatchToProps
    )(OneDay);


